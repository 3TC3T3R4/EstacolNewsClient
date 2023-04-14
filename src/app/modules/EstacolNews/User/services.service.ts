import { Injectable } from '@angular/core';
import { INewUser } from './interfaces/new-user.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserModel } from './models/user.model';
import { Observable } from 'rxjs';
import { EditorModel } from '../Editor/models/editor.model';
import { INewEditor } from '../Editor/interfaces/new-editor.interface';
import { ContentModel } from '../Content/models/content.model';
import { InewContent } from '../Content/interfaces/new-content.interface';
import { IContent } from '../Content/interfaces/content.interface';
import { PublicationModel } from '../Publication/models/publication.model';
import { NewPublicationModel } from '../Publication/models/new-publication.model';
import { NewEditorModel } from '../Editor/models/new-editor.model';
import { NewContentModel } from '../Content/models/new-content.model';
import { NewUserModel } from './models/new-user.model';

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


  createContent(content: ContentModel,token: string) : Observable<InewContent> {

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}` // Se utiliza el token que se recibe como argumento
      })
    };

    return this.httClient.post<InewContent>('https://localhost:7267/api/Content', content, httpOptions);

  }

  GetAll(): Observable<ContentModel[]> {

    return this.httClient.get<ContentModel[]>('https://localhost:7267/api/Content');

  }

  GetAllOtherCase(): Observable<ContentModel[]> {

    return this.httClient.get<ContentModel[]>('https://localhost:7267/api/Content');

  }

  createPublication(publication: NewPublicationModel,token: string) : Observable<NewPublicationModel> {

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}` // Se utiliza el token que se recibe como argumento
      })
    };

    return this.httClient.post<NewPublicationModel>('https://localhost:7267/api/Publication', publication, httpOptions);

  }

  getUserById(id: string,token: string) : Observable<NewUserModel> {

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}` // Se utiliza el token que se recibe como argumento
      })
    };

    return this.httClient.get<NewUserModel>('https://localhost:7191/api/User/user/'+ id, httpOptions);

  }
  getEditoyById(id: string,token: string) : Observable<NewEditorModel> {

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}` // Se utiliza el token que se recibe como argumento
      })
    };

    return this.httClient.get<NewEditorModel>('https://localhost:7267/api/Editor/ByIdEditor?id='+ id, httpOptions);

  }

  updateArt(id: number, content: NewContentModel,token: string) : Observable<InewContent> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}` // Se utiliza el token que se recibe como argumento
      })
    };
    return this.httClient.put<InewContent>('https://localhost:7267/api/Content?id='+ id, content, httpOptions);
  }

  getContentById(id: number,token: string) : Observable<NewContentModel> {

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}` // Se utiliza el token que se recibe como argumento
      })
    };

    return this.httClient.get<NewContentModel>('https://localhost:7267/api/Content/'+ id, httpOptions);

  }

  getContentByIdOtherCase(id: number,token: string) : Observable<ContentModel> {

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}` // Se utiliza el token que se recibe como argumento
      })
    };

    return this.httClient.get<ContentModel>('https://localhost:7267/api/Content/'+ id, httpOptions);

  }


  //listo
  deleteContent(id: number, token: string): Observable<IContent[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}` // Se utiliza el token que se recibe como argumento
      })
    };

    return this.httClient.put<IContent[]>('https://localhost:7267/api/Content/' + id , httpOptions);


  }





}
