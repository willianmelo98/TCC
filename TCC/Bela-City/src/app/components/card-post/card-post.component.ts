import { Component, NgZone, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-card-post',
  templateUrl: './card-post.component.html',
  styleUrls: ['./card-post.component.css']
})
export class CardPostComponent implements OnInit {


  url:String = "https://firebasestorage.googleapis.com/v0/b/bela-city.appspot.com/o/name-your-file-path-here?alt=media&token=2408fb70-eb4d-4983-b832-a95c30d27eea"
  constructor( public authService: AuthService,
    public ngZone: NgZone) {

   }

  ngOnInit(): void {
  }

}
