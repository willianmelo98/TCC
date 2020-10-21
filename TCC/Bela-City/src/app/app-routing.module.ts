import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddPostComponent } from './add-post/add-post.component';
import { CardPostComponent } from './card-post/card-post.component';
import { MenuLayoutComponent } from './menu-layout/menu-layout.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';

const routes: Routes = [


{
  path: '',
  component: MenuLayoutComponent,
  children: [


    {
      path:'',
      component: CardPostComponent
    },
    {
      path:'profile',
      component: ProfilePageComponent
    },
    {
      path:'addPost',
      component: AddPostComponent
    }
  ]
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
