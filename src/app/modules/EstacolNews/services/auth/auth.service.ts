import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import * as auth from 'firebase/auth';
import { HttpClient} from '@angular/common/http';
import { TaskService } from '../task.service';
import { UserModel } from '../../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {





  constructor(private router: Router,
    private afAuth: AngularFireAuth,
    private  httClient: HttpClient,
    private taskService: TaskService,

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
        localStorage.setItem('uid', result.user?.uid?? '');
        result.user?.getIdToken().then((token =>localStorage.setItem('token', token)));
        localStorage.setItem('prov', JSON.stringify(result.user?.providerId));
       const token = localStorage.getItem('token') ?? '';
        const user = new UserModel(

         localStorage.getItem('uid') ?? '',
         localStorage.getItem('user') ?? '{}',
         localStorage.getItem('prov') ?? ''


        );

        this.taskService.createTask(user,token).subscribe((response) => {
          console.log('Datos enviados', response);
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


