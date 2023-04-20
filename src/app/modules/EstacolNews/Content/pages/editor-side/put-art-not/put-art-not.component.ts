import { Component } from '@angular/core';
import { ServicesService } from '../../../../User/services.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ContentModel } from '../../../models/content.model';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'sofkaU-put-art-not',
  templateUrl: './put-art-not.component.html',
  styleUrls: ['./put-art-not.component.scss']
})
export class PutArtNotComponent {

  routergoBackMenu: string[];
  listContent: ContentModel[];
  selectedContent: ContentModel | undefined;
  frmFormReactive: FormGroup;
  butttonColor: any;
  constructor(private readonly task$: ServicesService,private ruta: ActivatedRoute,private router: Router, private http: HttpClientModule) {

    this.routergoBackMenu = ['../'];
    this.listContent = new Array<ContentModel>();

    this.frmFormReactive = new FormGroup({
      title: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
      ]),
      keywords: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
      finish_date:new FormControl('', [

      ]),
      publication_date:new FormControl('', [

      ]),
      program_date:new FormControl('', [

      ]),
      description: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
    });

  }


  colorButton(event: any){

    this.butttonColor = event.target;
    this.butttonColor.style.backgroundColor = 'red';
  
  }
  



  ngOnInit(): void {


    this.task$.GetAll().subscribe({
    next: (data) => {(this.listContent = data)
    },error: (err) => {
    console.log(err),console.log(this.listContent)
  },
    complete: () => {
        console.log(this.listContent);

      }
    })
  }

  UpdateSelect() {

    console.log("Entro al Update select");
    if (this.selectedContent && this.selectedContent.id_content) {
      const token = localStorage.getItem('token')?? '';
      console.log("Entro al IF")

      this.task$.getContentById(this.selectedContent.id_content,token).subscribe({

        next: (data) => {
          this.frmFormReactive.setValue({
          title: data.title,
          keywords: data.keywords,
          finish_date: data.finish_date,
          publication_date: data.publication_date,
          program_date: data.program_date,
          description: data.description
          })
        },
        error: (err) => {
          console.log(err),
          console.log(this.listContent)
        },
        complete: () => console.log("Complete getById")

      })

      this.task$.updateArt(this.selectedContent.id_content,this.frmFormReactive.getRawValue(),token).subscribe({
        next: data => this.router.navigate(['EstacolNews/editor-side/main']),
        error: (err) =>{
          alert('No puedes mandar una noticia vacia o sin contenido')
          this.router.navigate(['EstacolNews/editor-side/main'])
        },
        complete: () =>{ console.log("Complete update"),
        alert('Articulo o noticia actualizado')
      }

      });
    } else {

       console.log('El contenido seleccionado es inválido.');

      alert('Selecciona primero la Noticia  despues  Actualizala');
    }
  }


}
