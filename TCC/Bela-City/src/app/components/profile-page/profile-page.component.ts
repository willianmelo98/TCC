import { Component, NgZone, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Project } from 'src/app/shared/services/project.model';
import { StorageService } from 'src/app/shared/services/storage.service';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {

  post$: Observable<Project[]>
  project: Project;

  edit: boolean;
  labelButton: string;
  id: string;
  messages: string

  constructor(
    public authService: AuthService,
    private projectService: StorageService,
        public router: Router,
    public ngZone: NgZone
  ) { }

  ngOnInit(): void {
    this.post$ = this.projectService.getPost();

  }

  editarPub(){

      this.project.idProject = this.id;
      this.projectService.update(this.project)
        .then(() => {
          this.messages = `Projeto Atulizado com sucesso!`;
          this.labelButton = 'Salvar'

        })
        .catch((erro) => { this.messages = `Erro ao atualizar o projeto: ${erro}` })

  }



  editProject(p: Project) {
    this.edit = true;
    this.labelButton = 'Atualizar';
    this.id = p.idProject;

  }

  deleteProject(p: Project) {
    this.projectService.delete(p)
      .then(() => {
        this.messages = `Projeto Excluído com sucesso!`;
      })
      .catch((erro) => { this.messages = `Erro ao excluir o projeto: ${erro}` })

  }






}
