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
import { PutArtNotComponent } from './Content/pages/editor-side/put-art-not/put-art-not.component';
import { PostArtNotComponent } from './Content/pages/editor-side/post-art-not/post-art-not.component';
import { GetArtNotComponent } from './Content/pages/editor-side/get-art-not/get-art-not.component';
import { DeleteComponent } from './Content/pages/editor-side/delete-art-not/delete.component';
import { MainComponent } from './Content/pages/editor-side/main/main.component';
import { DashboardComponent } from './Content/pages/dashboard/dashboard.component';
import { LoginComponent } from './User/pages/login/login.component';
import { LobbyComponent } from './User/pages/client-side/lobby/lobby.component';
import { ShareButtonsModule } from 'ngx-sharebuttons/buttons';
import { ShareIconsModule } from 'ngx-sharebuttons/icons';
import { DarkModeComponent } from './User/pages/client-side/dark-mode/dark-mode.component';
import { TrasformPipe } from './Content/pipes/trasformDatePipe/trasform.pipe';
import { BoolPipe } from './Content/pipes/otherpipes/bool.pipe';
import { RouterModule } from '@angular/router';
import { InputComponentsComponent } from './Content/components/input-components/input-components.component';
import { GetArtNotClientComponent } from './Content/pages/editor-side/get-art-not-client/get-art-not-client.component';




@NgModule({
  declarations: [
    LoginComponent,
    DashboardComponent,
    MainComponent,
    DeleteComponent,
    GetArtNotComponent,
    PostArtNotComponent,
    PutArtNotComponent,
    PostpublicComponent,
    LobbyComponent,
    DarkModeComponent,
    TrasformPipe,
    BoolPipe,
    InputComponentsComponent,
    GetArtNotClientComponent,

  ],
  imports: [
    CommonModule,EstacolNewsRoutingModule,HttpClientModule,ReactiveFormsModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule, ShareButtonsModule.withConfig({
      debug: true

    }),
    ShareIconsModule,
    RouterModule
  ]
})
export class EstacolNewsModule { }
