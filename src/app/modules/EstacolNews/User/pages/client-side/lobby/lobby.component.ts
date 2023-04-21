import { Component } from '@angular/core';
import { ServicesService } from '../../../../User/services.service';
import { ContentModel } from 'src/app/modules/EstacolNews/Content/models/content.model';


@Component({
  selector: 'sofkaU-lobby',
  templateUrl:'./lobby.component.html',
  styleUrls: ['./lobby.component.scss']
})
export class LobbyComponent {

  selectContent: ContentModel | undefined;
  routerrefresh: string[];
  routergoBackMenu: string[];
  listContent: ContentModel[];
  selectedContent: ContentModel | undefined;
  selectContentUrl: string | undefined;
  colorButtton: any ;
  constructor(private readonly taskService: ServicesService) {

    this.routerrefresh = ['../lobby'];
    this.routergoBackMenu = [''];
    this.listContent = new Array<ContentModel>();


  }


  likeSelect() {

    if (this.selectedContent && this.selectedContent.id_content) {
      // La variable content no es undefined y tiene una propiedad id_content
      const token = localStorage.getItem('token') || '';
      this.taskService.likeContent(this.selectedContent.id_content,token).subscribe({
        next: (data) => {
          console.log(data);
        },
        error: (err) => {
          console.log(err);
        },
        complete: () => {
          console.log('complete');
        }
      });

    } else {
      // La variable content es undefined o no tiene una propiedad id_content
      console.log('El contenido seleccionado es inválido.');
    }
  }


  colorButton(event: any) {
 
    this.colorButtton = event.target;
    this.colorButtton.style.backgroundColor = 'red';
    //console.log("Valor del boton",event.);


    

  }

  UrlConfig() {

    const token = localStorage.getItem('token') || '';

    if (this.selectedContent && this.selectedContent.id_content) {

          this.taskService.upateUrl(this.selectedContent.id_content,token).subscribe({})
        
    }else{

      
      alert('Debes seleccionar primero la noticia que quieres compartir');
    
    }




  }











  ngOnInit(): void {

    const token = localStorage.getItem('token') || '';
    this.taskService.GetAllOtherCase().subscribe({
      next: (data) => {
        this.listContent = data

        if (this.selectedContent && this.selectedContent.id_content) {
           this.selectContentUrl = data[this.selectedContent.id_content].url
          }
      },
      error: (err) => {
        console.log(err),console.log(this.listContent)
      },
      complete: () => {
        console.log(this.listContent);
      }
    })
    

  }


}
