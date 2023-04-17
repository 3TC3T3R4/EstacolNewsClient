import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NO_ERRORS_SCHEMA } from '@angular/core';

//pages
import { LoginComponent } from './User/pages/login/login.component';
import { DashboardComponent } from './Content/pages/dashboard/dashboard.component';
import { MainComponent } from './Content/pages/editor-side/main/main.component';
import { PostArtNotComponent } from './Content/pages/editor-side/post-art-not/post-art-not.component';
import { GetArtNotComponent } from './Content/pages/editor-side/get-art-not/get-art-not.component';
import { PostpublicComponent } from './Content/pages/editor-side/post-public-art-not/postpublic.component';
import { PutArtNotComponent } from './Content/pages/editor-side/put-art-not/put-art-not.component';
import { DeleteComponent } from './Content/pages/editor-side/delete-art-not/delete.component';
import { LobbyComponent } from './User/pages/client-side/lobby/lobby.component';


// GOOGLE

import{

  AngularFireAuthGuard,
  redirectLoggedInTo,
  redirectUnauthorizedTo


} from '@angular/fire/compat/auth-guard';


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
    path: 'EstacolNews/editor-side/main', //proteger esta ruta
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
    path: 'EstacolNews/User/client-side/lobby',
    component: LobbyComponent,
  },




];

@NgModule({
  imports: [RouterModule.forChild(routes)],schemas: [NO_ERRORS_SCHEMA],
  exports: [ RouterModule ]
})
export class EstacolNewsRoutingModule { }
