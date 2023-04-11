import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//modules for routes
import { EstacolNewsRoutingModule } from './estacolnews-routing.module';

//components
import { LoginComponent } from './pages/login/login.component';
import { environment } from '../../../environments/environment';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { MainComponent } from './pages/editor-side/main/main.component';
import { DeleteComponent } from './pages/editor-side/delete-art-not/delete.component';
import { GetArtNotComponent } from './pages/editor-side/get-art-not/get-art-not.component';
import { PostArtNotComponent } from './pages/editor-side/post-art-not/post-art-not.component';
import { PutArtNotComponent } from './pages/editor-side/put-art-not/put-art-not.component';
import { PutAsigArtNotComponent } from './pages/editor-side/put-asig-art-not/put-asig-art-not.component';
import { PutCollaboratorArtNotComponent } from './pages/editor-side/put-collaborator-art-not/put-collaborator-art-not.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PostpublicComponent } from './pages/editor-side/post-public-art-not/postpublic.component';




@NgModule({
  declarations: [
    LoginComponent,
    DashboardComponent,
    MainComponent,
    DeleteComponent,
    GetArtNotComponent,
    PostArtNotComponent,
    PutArtNotComponent,
    PutAsigArtNotComponent,
    PutCollaboratorArtNotComponent,
    PostpublicComponent
  ],
  imports: [
    CommonModule,EstacolNewsRoutingModule,HttpClientModule,ReactiveFormsModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule
  ]
})
export class EstacolNewsModule { }
