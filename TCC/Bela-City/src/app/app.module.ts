import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuLayoutComponent } from './menu-layout/menu-layout.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { CardPostComponent } from './card-post/card-post.component';
import {MatCardModule} from '@angular/material/card';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { AddPostComponent } from './add-post/add-post.component';





@NgModule({
  declarations: [
    AppComponent,
    MenuLayoutComponent,
    CardPostComponent,
    ProfilePageComponent,
    AddPostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
