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
    //console.log("Valor del boton event",event.target.id_content);

    //this.finalStep(this.selectContent?.id_content, token);
    

  }

  UrlConfig() {

    const token = localStorage.getItem('token') || '';

    if (this.selectedContent && this.selectedContent.id_content) {

          this.taskService.upateUrl(this.selectedContent.id_content,token).subscribe({
            
            next: (data) => {
              console.log("Se actualizo URl en la BD");
              
            },
            error: (err) => {
              console.log("Entro al error"),
              this.finalStep(this.selectContent?.id_content, token);
            },
            complete: () => {
              console.log('complete');
            }


          })
          
          // this.taskService.getContentByIdOtherCase(this.selectedContent.id_content,token).subscribe({
          //   next: (data) => {
          //     this.selectContentUrl = data.url
          //     console.log("Se asigno valor al bton URL");
          //     //console.log("Valor de la URL final es>",this.selectContentUrl);
          //   },
          //   error: (err) => {
          //     console.log("Entro al error");
          //   },
          //   complete: () => {
          //     console.log('complete');
          //   }

          // })

        
    }else{

      
      alert('Debes seleccionar primero la noticia que quieres compartir');
    
    }




  }



finalStep(number: any, token: any) {

  this.taskService.getContentByIdOtherCase(number,token).subscribe({
      next: (data) => {
        this.selectContentUrl = data.url
        console.log("Se asigno valor al bton URL",this.selectContentUrl);
      },
      error: (err) => {
        console.log("Entro al error final step");
      },
      complete: () => {
        console.log('complete');
      }

    })

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
        console.log(err),
        console.log("Sin Url Asignada")
      },
      complete: () => {
        console.log(this.listContent);
      }
    })
    

  }


}
