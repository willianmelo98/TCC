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


  constructor(
    public authService: AuthService,
    private projectService: StorageService,
        public router: Router,
    public ngZone: NgZone
  ) { }

  ngOnInit(): void {
    this.post$ = this.projectService.getPost();

  }




}
