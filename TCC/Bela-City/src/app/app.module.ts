import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './shared/routing/app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';

import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { AuthService } from "./shared/services/auth.service";
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AddPostComponent } from './components/add-post/add-post.component';
import { CardPostComponent } from './components/card-post/card-post.component';
import { MenuLayoutComponent } from './components/menu-layout/menu-layout.component';
import { ProfilePageComponent } from './components/profile-page/profile-page.component';
import {MatMenuModule} from '@angular/material/menu';
import { AngularFireStorageModule } from '@angular/fire/storage';
import {MatSelectModule} from '@angular/material/select';

import { LazyLoadImageModule } from 'ng-lazyload-image';
import { ServiceWorkerModule } from '@angular/service-worker';



@NgModule({
  declarations: [
    AppComponent,
    MenuLayoutComponent,
    CardPostComponent,
    ProfilePageComponent,
    AddPostComponent,
    SignInComponent,
    SignUpComponent,
    ForgotPasswordComponent,
    VerifyEmailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    ReactiveFormsModule,
    MatMenuModule,
    MatSelectModule,
    FormsModule,
    LazyLoadImageModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })



  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
