import { Component, NgZone, OnInit } from '@angular/core';
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

  projects$: Observable<Project[]>
  project: Project;

   photoURL:string;
  url:String;


  constructor( public authService: AuthService, private projectService: StorageService,
    public ngZone: NgZone) {

   }

  ngOnInit(): void {
    this.projects$ = this.projectService.getAllProjects();
    this.photoURL = this.project.photoURL

  }




}
