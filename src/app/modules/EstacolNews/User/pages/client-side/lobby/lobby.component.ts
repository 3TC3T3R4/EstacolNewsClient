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


  // dislikeSelect() {

  //   if (this.selectedContent && this.selectedContent.id_content) {
  //     // La variable content no es undefined y tiene una propiedad id_content
  //   } else {
  //     // La variable content es undefined o no tiene una propiedad id_content
  //     console.log('El contenido seleccionado es inválido.');
  //   }



  // }

  // shareSelect() {

  //   if (this.selectedContent && this.selectedContent.id_content) {
  //     // La variable content no es undefined y tiene una propiedad id_content
  //   } else {
  //     // La variable content es undefined o no tiene una propiedad id_content
  //     console.log('El contenido seleccionado es inválido.');
  //   }



  // }


  ngOnInit(): void {

    const token = localStorage.getItem('token') || '';
    this.taskService.GetAll().subscribe({
      next: (data) => {
        this.listContent = data,
        this.selectContentUrl
      },
      error: (err) => {
        console.log(err),console.log(this.listContent)
      },
      complete: () => {
        console.log(this.listContent);
      }
    })
     if (this.selectedContent && this.selectedContent.id_content) {
      this.taskService.upateUrl(this.selectedContent.id_content,token).subscribe({
        next: (data) => {
        this.selectContentUrl = data.url
      },
        error: (err) => {
          console.log(err)
        },
        complete: () => {}
      })
    }else{

      console.log('El contenido seleccionado es inválido en la obtencion de la url.');

    }

  }


}
