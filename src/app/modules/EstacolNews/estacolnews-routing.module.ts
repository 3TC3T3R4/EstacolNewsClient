import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//pages
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { MainComponent } from './pages/editor-side/main/main.component';
import { PostArtNotComponent } from './pages/editor-side/post-art-not/post-art-not.component';


//GOOGLE

import{

  AngularFireAuthGuard,
  redirectLoggedInTo,
  redirectUnauthorizedTo


} from '@angular/fire/compat/auth-guard';
import { GetArtNotComponent } from './pages/editor-side/get-art-not/get-art-not.component';
import { PutCollaboratorArtNotComponent } from './pages/editor-side/put-collaborator-art-not/put-collaborator-art-not.component';
import { PutAsigArtNotComponent } from './pages/editor-side/put-asig-art-not/put-asig-art-not.component';
import { DeleteComponent } from './pages/editor-side/delete-art-not/delete.component';
import { PutArtNotComponent } from './pages/editor-side/put-art-not/put-art-not.component';
import { PostpublicComponent } from './pages/editor-side/post-public-art-not/postpublic.component';
 const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['EstacolNews/login']);
const redirectLoggedInToDashboard = () => redirectLoggedInTo(['EstacolNews/dashboard']);



const routes : Routes = [

  {
    path: '', //localhost:4200/
    component: LoginComponent,
    canActivate: [AngularFireAuthGuard],
    data:{authGuardPipe: redirectLoggedInToDashboard}
  },

  {
  path: 'EstacolNews/login', //localhost:4200/EstacolNews
  component: LoginComponent

  },
  {
    path: 'EstacolNews/dashboard', //localhost:4200/EstacolNews
    component: DashboardComponent,
    canActivate: [AngularFireAuthGuard],
    data:{authGuardPipe: redirectUnauthorizedToLogin}
  },
  {
    path: 'EstacolNews/editor-side/main',
    component: MainComponent,
  },
  {
    path: 'EstacolNews/editor-side/main/post-art-not',
    component: PostArtNotComponent,
  },
  {
    path: 'EstacolNews/editor-side/main/get-art-not',
    component: GetArtNotComponent,
  },
  {
    path: 'EstacolNews/editor-side/main/post-public-art-not',
    component: PostpublicComponent,
  },
  {
    path: 'EstacolNews/editor-side/main/put-art-not',
    component: PutArtNotComponent,
  },
  {
    path: 'EstacolNews/editor-side/main/delete-art-not',
    component: DeleteComponent,
  },
  {
    path: 'EstacolNews/editor-side/main/put-asig-art-not',
    component: PutAsigArtNotComponent,
  },
  {
    path: 'EstacolNews/editor-side/main/put-collaborator-art-not',
    component: PutCollaboratorArtNotComponent,
  },




];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [ RouterModule ]
})
export class EstacolNewsRoutingModule { }
