import { Injectable } from '@angular/core';
import { INewUser } from './interfaces/new-user.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserModel } from './models/user.model';
import { Observable } from 'rxjs';
import { EditorModel } from '../Editor/models/editor.model';
import { INewEditor } from '../Editor/interfaces/new-editor.interface';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private httClient: HttpClient) {}

  createUser(user: UserModel,token: string) : Observable<INewUser> {

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}` // Se utiliza el token que se recibe como argumento
      })
    };

    return this.httClient.post<INewUser>('https://localhost:7191/api/User', user, httpOptions);


  }

  createEditor(editor: EditorModel,token: string) : Observable<INewEditor> {

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}` // Se utiliza el token que se recibe como argumento
      })
    };

    return this.httClient.post<INewEditor>('https://localhost:7267/api/Editor', editor, httpOptions);


  }



}
