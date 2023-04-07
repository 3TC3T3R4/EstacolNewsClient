import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//pages
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
//GOOGLE

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
  }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [ RouterModule ]
})
export class EstacolNewsRoutingModule { }
