import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Project } from './project.model';

@Injectable({
  providedIn: 'root'
})

export class StorageService {


  projectCol: AngularFirestoreCollection<Project>;

  constructor(private storage: AngularFirestore) {
    this.projectCol = storage.collection<Project>('projects')
  }

  getAllProjects(): Observable<Project[]> {
    return this.storage.collection<Project>('projects', ref =>
      ref.orderBy('datePub', 'desc'))
      .valueChanges()
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

}



