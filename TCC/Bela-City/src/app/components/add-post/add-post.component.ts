import { Component, OnInit } from '@angular/core';
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from '@angular/fire/storage';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Project } from 'src/app/shared/services/project.model';
import { StorageService } from 'src/app/shared/services/storage.service';
import { User } from 'src/app/shared/services/user';


@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',


  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {



  formProject: FormGroup;
  labelButton: string;
  project: Project;
  projects$: Observable<Project[]>
  edit: boolean;
  messages: string;
  id: string;


  get usuario(): User {
    const user = JSON.parse(localStorage.getItem('user'));
    return user
  }


  estados: string[] = [
    "Água Rasa‎",
    "Alto de Pinheiros‎",
    "Anhanguera‎",
    "Aricanduva‎",
    "Artur Alvim‎",
    "Barra Funda‎",
    "Bela Vista‎",
    "Belém‎",
    "Bom Retiro",
    "Brasilândia",
    "Butantã‎",
    "Cachoeirinha‎",
    "Cambuci‎",
    "Campo Belo‎",
    "Campo Grande",
    "Campo Limpo‎",
    "Cangaíba‎",
    "Capão Redondo",
    "Carrão‎",
    "Casa Verde‎",
    "Cidade Ademar‎",
    "Cidade Dutra‎",
    "Cidade Líder‎",
    "Cidade Líder‎",
    "Cidade Tiradentes‎",
    "Consolação‎",
    "Cursino‎",
    "Ermelino Matarazzo",
    "Freguesia do Ó",
    "Grajaú‎",
    "Guaianases",
    "Iguatemi‎",
    "Ipiranga‎",
    "Itaim Bibi",
    "Itaim Paulista",
    "Itaquera‎",
    "Jabaquara‎",
    "Jaçanã‎",
    "Jaguara‎",
    "Jaguaré",
    "Jaraguá",
    "Jardim Ângela",
    "Jardim Helena",
    "Jardim Paulista‎",
    "Jardim São Luís‎",
    "Lapa‎",
    "Liberdade‎",
    "Limão‎",
    "Mandaqui‎",
    "Marsilac‎",
    "Moema‎",
    "Mooca‎",
    "Morumbi‎",
    "Parelheiros‎",
    "Pari‎",
    "Parque do Carmo‎",
    "Penha‎",
    "Perdizes‎",
    "Pinheiros‎",
    "Ponte Rasa‎",
    "Raposo Tavares‎",
    "República‎",
    "Rio Pequeno‎",
    "Sacomã‎",
    "Santa Cecília",
    "Santana‎",
    "Santo Amaro",
    "São Domingos",
    "São Lucas‎",
    "São Mateus",
    "São Miguel Paulista‎",
    "São Rafael‎",
    "Sapopemba‎",
    "Saúde‎",
    "Sé‎",
    "Tatuapé‎",
    "Tremembé‎",
    "Tucuruvi",
    "Vila Andrade‎",
    "Vila Curuçá‎",
    "Vila Formosa‎",
    "Vila Guilherme‎",
    "Vila Jacuí‎",
    "Vila Leopoldina‎",
    "Vila Maria‎",
    "Vila Mariana‎",
    "Vila Matilde‎",
    "Vila Medeiros‎",
    "Vila Prudente‎",
    "Vila Sônia‎"

  ];



  uploadPercent: Observable<number>;
  downloadURL: Observable<string>;
  task: AngularFireUploadTask;
  complete: boolean;
  caminhoImagem: string;


  constructor ( public authService: AuthService,
    private form: FormBuilder, private storage: AngularFireStorage, private projectService: StorageService) {}


  ngOnInit() {
    this.initForm()
    this.labelButton = 'Save';
    this.projects$ = this.projectService.getAllProjects();
    this.project = new Project();
  }

  initForm() {
    this.formProject = this.form.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      bairro: ['', Validators.required]
    });
  }

  upload(event) {
    this.complete = false;
    const file = event.target.files[0]
    const path = `imagens/${file.name}`;
    const fileRef = this.storage.ref(path.replace(/\s/g, ''));
    this.task = this.storage.upload(path.replace(/\s/g, ''), file)
    this.task.then(up => {
      fileRef.getDownloadURL().subscribe(url => {
        this.complete = true
        this.caminhoImagem = url

      })
    })
    this.uploadPercent = this.task.percentageChanges();
  }

    saveProject() {
    if (this.formProject.invalid) {
      this.messages = `Verifique os campo sobrigatórios!`
      return;
    }
    this.project = this.formProject.value;
    this.project.displayName = this.usuario.displayName;
    this.project.photoURL = this.usuario.photoURL;
    this.project.photoMain = this.caminhoImagem;
    if (!this.edit) {
      this.projectService.save(this.project)
        .then(() => {
          this.messages = `Projeto Salvo com sucesso!`;
          this.formProject.reset();

        })
        .catch((erro) => { this.messages = `Erro ao salvar o projeto: ${erro}` })
    } else {
      this.project.idProject = this.id;
      this.projectService.update(this.project)
        .then(() => {
          this.messages = `Projeto Atulizado com sucesso!`;
          this.formProject.reset();
          this.labelButton = 'Save'

        })
        .catch((erro) => { this.messages = `Erro ao atualizar o projeto: ${erro}` })
    }
  }

    editProject(p: Project) {
      this.edit = true;
      this.labelButton = 'Update';
      this.id = p.idProject
      this.formProject.controls['title'].setValue(p.title)
      this.formProject.controls['description'].setValue(p.description)
      this.formProject.controls['bairro'].setValue(p.bairro)
    }

    deleteProject(p: Project) {
      this.projectService.delete(p)
        .then(() => {
          this.messages = `Projeto Excluído com sucesso!`;
          this.formProject.reset();

        })
        .catch((erro) => { this.messages = `Erro ao excluir o projeto: ${erro}` })

    }

  }
