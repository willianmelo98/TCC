import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Project } from './project.model';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})

export class StorageService {



nome:String;

  projectCol: AngularFirestoreCollection<Project>;

  constructor(private storage: AngularFirestore) {
    this.projectCol = storage.collection<Project>('projects')
  }

  getAllProjects(): Observable<Project[]> {
    return this.storage.collection<Project>('projects', ref =>
      ref.orderBy('datePub', 'desc'))
      .valueChanges();
  }


   getProject(bairro:string): Observable<Project[]> {
    return  this.storage.collection<Project>('projects', ref =>
      ref.where("bairro","==",bairro))
      .valueChanges();
  }



   getPost(): Observable<Project[]>{

      return this.storage.collection<Project>("projects", ref =>


      ref.where("uid", "==",this.perfil.uid)).valueChanges();



   }


  save(project: Project): Promise<void> {
    project.datePub = new Date();
    return this.projectCol.add(Object.assign({}, project)).then(objeto => {
      project.idProject = objeto.id
      this.update(project)
    })
  }

  update(project: Project): Promise<void> {
    return this.projectCol.doc(project.idProject)
      .update(Object.assign({}, project))
  }

  delete(project: Project): Promise<void> {
    return this.projectCol.doc(project.idProject)
      .delete()
  }


  get perfil(): User {
    const user = JSON.parse(localStorage.getItem('user'));
    return user
  }


}



