import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//modules for routes
import { EstacolNewsRoutingModule } from './estacolnews-routing.module';

//components

import { environment } from '../../../environments/environment';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PostpublicComponent } from './Content/pages/editor-side/post-public-art-not/postpublic.component';
import { PutCollaboratorArtNotComponent } from './Content/pages/editor-side/put-collaborator-art-not/put-collaborator-art-not.component';
import { PutAsigArtNotComponent } from './Content/pages/editor-side/put-asig-art-not/put-asig-art-not.component';
import { PutArtNotComponent } from './Content/pages/editor-side/put-art-not/put-art-not.component';
import { PostArtNotComponent } from './Content/pages/editor-side/post-art-not/post-art-not.component';
import { GetArtNotComponent } from './Content/pages/editor-side/get-art-not/get-art-not.component';
import { DeleteComponent } from './Content/pages/editor-side/delete-art-not/delete.component';
import { MainComponent } from './Content/pages/editor-side/main/main.component';
import { DashboardComponent } from './Content/pages/dashboard/dashboard.component';
import { LoginComponent } from './User/pages/login/login.component';




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
    PostpublicComponent,

  ],
  imports: [
    CommonModule,EstacolNewsRoutingModule,HttpClientModule,ReactiveFormsModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule
  ]
})
export class EstacolNewsModule { }
