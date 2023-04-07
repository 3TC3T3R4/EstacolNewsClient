import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//modules for routes
import { EstacolNewsRoutingModule } from './estacol-news-routing.module';

//components
import { LoginComponent } from './pages/login/login.component';
import { environment } from '../../../environments/environment';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,EstacolNewsRoutingModule, AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule
  ]
})
export class EstacolNewsModule { }
