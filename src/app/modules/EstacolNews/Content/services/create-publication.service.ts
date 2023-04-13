import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ServicesService } from '../../User/services.service';
import { PublicationModel } from '../../Publication/models/publication.model';
import { NewPublicationModel } from '../../Publication/models/new-publication.model';

@Injectable({
  providedIn: 'root'
})
export class CreatePublicationService {

  idEditor: string;
  //idContent: string;



  constructor(private router: Router, private readonly task$: ServicesService) {

    this.idEditor = localStorage.getItem('uid')?? '';
   // this.idContent = localStorage.getItem('idContent')?? '';


  }



  public CreatePublication(_idContent: number){

    const objPublication = new NewPublicationModel(

      localStorage.getItem('uid') ?? '',
      _idContent

    )

    console.log('sendPublication', );


      const token = localStorage.getItem('token') ?? '';
      this.task$.createPublication(objPublication,token).subscribe({
        next: data => this.router.navigate(['EstacolNews/editor-side/main']),
        error: err => console.log(err),
        complete: () => console.log('completo'),
      });







  }




}
