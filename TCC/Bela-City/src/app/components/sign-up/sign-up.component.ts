import { Component, OnInit } from '@angular/core';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { AuthService } from "../../shared/services/auth.service";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})

export class SignUpComponent implements OnInit {

  uploadPercent: Observable<number>;
  downloadURL: Observable<string>;
  task: AngularFireUploadTask;
  complete: boolean;
  fotoPerfil: string;

  constructor(
    public authService: AuthService,private storage: AngularFireStorage
  ) { }

  ngOnInit() { }


  upload(event) {
    this.complete = false;
    const file = event.target.files[0]
    const path = `imagens/${file.name}`;
    const fileRef = this.storage.ref(path.replace(/\s/g, ''));
    this.task = this.storage.upload(path.replace(/\s/g, ''), file)
    this.task.then(up => {
      fileRef.getDownloadURL().subscribe(url => {
        this.complete = true
        this.fotoPerfil = url

      })
    })
    this.uploadPercent = this.task.percentageChanges();
  }



}
