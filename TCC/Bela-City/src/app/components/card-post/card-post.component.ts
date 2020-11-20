import { Component, Input, NgZone, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Project } from 'src/app/shared/services/project.model';
import { StorageService } from 'src/app/shared/services/storage.service';

@Component({
  selector: 'app-card-post',
  templateUrl: './card-post.component.html',
  styleUrls: ['./card-post.component.css']
})
export class CardPostComponent implements OnInit {

  showOne: boolean;
  bairro:string;

  photoURL: string;
  url: String;

  projects$: Observable<Project[]>
  post$: Observable<Project[]>
  project: Project;

  estados:String[] = [
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



  constructor(public authService: AuthService, private projectService: StorageService,
    public ngZone: NgZone) {

      this.showOne = false;
  }

  ngOnInit(): void {


    this.projects$ = this.projectService.getAllProjects();
    this.photoURL = this.project.photoURL;

  }

  filtrar() {

    this.post$ =this.projectService.getProject(this.bairro);

  }




}
