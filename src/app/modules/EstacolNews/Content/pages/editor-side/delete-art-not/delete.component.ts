import { Component } from '@angular/core';
import { ServicesService } from 'src/app/modules/EstacolNews/User/services.service';
import { ContentModel } from '../../../models/content.model';
import { Router } from '@angular/router';

@Component({
  selector: 'sofkaU-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class DeleteComponent {

  routergoBackMenu: string[];
  listContent: ContentModel[];
  selectedContent: ContentModel | undefined;

  constructor(private router: Router,private readonly taskService: ServicesService) {


    this.routergoBackMenu = ['../'];
    this.listContent = new Array<ContentModel>();


  }
//this.router.navigate(['EstacolNews/editor-side/main'])

  DeleteSelect() {

    console.log("Entro al delete select");
    if (this.selectedContent && this.selectedContent.id_content) {
      // La variable content no es undefined y tiene una propiedad id_content
      const token = localStorage.getItem('token')?? '';
      console.log("Entro al IF")
      this.taskService.deleteContent(this.selectedContent.id_content,token).subscribe({
      next: data => this.router.navigate(['EstacolNews/editor-side/main']),
      error: (err) =>{
        alert('Articulo o noticia eliminado')
        this.router.navigate(['EstacolNews/editor-side/main'])
      },
      complete: () => console.log("Complete"),
     });

    } else {
      // La variable content es undefined o no tiene una propiedad id_content
      console.log('El contenido seleccionado es inválido.');

      alert('Selecciona primero la tarea y despues dale eliminar');
    }

  }



  ngOnInit(): void {


    this.taskService.GetAll().subscribe({
    next: (data) => {(this.listContent = data)
    },error: (err) => {
    console.log(err),console.log(this.listContent)
  },
    complete: () => {
        console.log(this.listContent);

      }
    })

  }








}
