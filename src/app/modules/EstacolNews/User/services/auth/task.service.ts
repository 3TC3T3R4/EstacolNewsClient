import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { ServicesService } from '../../services.service';
import { UserModel } from '../../models/user.model';
import * as auth from 'firebase/auth';
import { EditorModel } from '../../../Editor/models/editor.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {


  constructor(private router: Router,
    private afAuth: AngularFireAuth,
    private  httClient: HttpClient,
    private taskService: ServicesService,

    ) { }




   // Sign in with Google
   GoogleAuth() {
    return this.AuthLogin(new auth.GoogleAuthProvider()).then((res: any) => {
      this.router.navigate(['EstacolNews/dashboard']);
    });
  }
  // Auth logic to run auth providers
 private AuthLogin(provider: any) {
    return this.afAuth
      .signInWithPopup(provider)
      .then((result) => {
        this.router.navigate(['EstacolNews/dashboard']);
       console.log(result);
        localStorage.setItem('user', JSON.stringify(result.user?.email?.valueOf()));
        localStorage.setItem('name', JSON.stringify(result.user?.displayName?.valueOf()));

        localStorage.setItem('uid', result.user?.uid?? '');
        result.user?.getIdToken().then((token =>localStorage.setItem('token', token)));
        localStorage.setItem('prov', JSON.stringify(result.user?.providerId));
       const token = localStorage.getItem('token') ?? '';
        const user = new UserModel(

         localStorage.getItem('uid') ?? '',
         localStorage.getItem('user') ?? '{}',
         localStorage.getItem('prov') ?? ''


        );

        const editor = new EditorModel(

          localStorage.getItem('uid') ?? '',
          localStorage.getItem('prov') ?? '{}',
          localStorage.getItem('prov') ?? ''

        );

        this.taskService.createUser(user,token).subscribe((response) => {
          console.log('Datos enviados a mongo', response);
        });

        this.taskService.createEditor(editor,token).subscribe((response) => {
          console.log('Datos enviados a SQLServer', response);
        });

      })
      .catch((error) => {
        window.alert(error);
      });
  }


  SignOut() {
    return this.afAuth.signOut().then(() => {
      localStorage.removeItem('user');
      localStorage.removeItem('uid');
      localStorage.removeItem('token');
      this.router.navigate(['EstacolNews/login']);
    });
  }
}