import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { INewUser } from '../interfaces/new-user.interface';
import { UserModel } from '../models/user.model';


@Injectable({
  providedIn: 'root'
})
export class TaskService {




  constructor(private httClient: HttpClient) {}

  createTask(user: UserModel,token: string) : Observable<INewUser> {

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}` // Se utiliza el token que se recibe como argumento
      })
    };

    return this.httClient.post<INewUser>('https://localhost:7191/api/User', user, httpOptions);


  }


}
