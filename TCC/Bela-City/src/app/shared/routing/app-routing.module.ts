import { NgModule } from '@angular/core';
import { Routes, RouterModule, RouterLink, Router } from '@angular/router';

import { SignInComponent } from '../../components/sign-in/sign-in.component';
import { SignUpComponent } from '../../components/sign-up/sign-up.component';
import { ForgotPasswordComponent } from '../../components/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from '../../components/verify-email/verify-email.component';

import { AuthGuard } from "../../shared/guard/auth.guard";
import { MenuLayoutComponent } from 'src/app/components/menu-layout/menu-layout.component';
import { CardPostComponent } from 'src/app/components/card-post/card-post.component';
import { ProfilePageComponent } from 'src/app/components/profile-page/profile-page.component';
import { AddPostComponent } from 'src/app/components/add-post/add-post.component';

const routes: Routes = [
  { path: '', redirectTo: 'sign-in', pathMatch: 'full'},
  { path: 'sign-in', component: SignInComponent},
  { path: 'register-user', component: SignUpComponent},
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'verify-email-address', component: VerifyEmailComponent },
  {
    path: 'main',
    component: MenuLayoutComponent,
    canActivate: [AuthGuard],
    children: [


      {
        path:'',
        component: CardPostComponent,
        canActivate: [AuthGuard]
      },
      {
        path:'profile',
        component: ProfilePageComponent,
        canActivate: [AuthGuard]
      },
      {
        path:'addPost',
        component: AddPostComponent,
        canActivate: [AuthGuard]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
