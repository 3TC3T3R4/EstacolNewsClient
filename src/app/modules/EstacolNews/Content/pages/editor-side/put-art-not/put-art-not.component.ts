import { Component } from '@angular/core';
import { ServicesService } from '../../../../User/services.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { NewContentModel } from '../../../models/new-content.model';
import { ContentModel } from '../../../models/content.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'sofkaU-put-art-not',
  templateUrl: './put-art-not.component.html',
  styleUrls: ['./put-art-not.component.scss']
})
export class PutArtNotComponent {

  routergoBackMenu: string[];
  frmFormReactive : FormGroup;
 // idU: number;
  listContent: NewContentModel[];
  listContentTwo: ContentModel[];
  selectedContent: ContentModel | undefined;



  constructor(private readonly task$: ServicesService,private ruta: ActivatedRoute,private router: Router) {

   // this.idU = localStorage.getItem('uid')?? '';
    this.listContent = new Array<NewContentModel>();
    this.routergoBackMenu = ['../'];
    this.listContentTwo = new Array<ContentModel>();
    this.frmFormReactive = new FormGroup({

      //id: new FormControl(null, [Validators.required]),

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


  ngOnInit(): void {

    if (this.selectedContent && this.selectedContent.id_content) {
      // La variable content no es undefined y tiene una propiedad id_content
      const numberUpp = this.selectedContent.id_content;
      this.task$.GetAll().subscribe({
        next: (data) => {(this.listContentTwo = data)
          const token = localStorage.getItem('token') ?? ''
            this.ruta.params.subscribe(params => {
             this.task$.getContentByIdOtherCase(numberUpp,token).subscribe(
              {
               next: data => {this.frmFormReactive.setValue({
                title: data.title,
                kewywords: data.keywords,
                finish_date: data.finish_date,
                publication_date: data.publication_date,
                program_date: data.program_date,
                description: data.description})
                console.log("VALORES SETEADOS",this.frmFormReactive)
              },
              error: (err) => {
                console.log(err),console.log(this.listContent)
              },
              complete: () => {
                console.log('complete')
              }
            })
          })
        },error: (err) => {
          console.log(err),console.log(this.listContent)
        },complete: () => {
          console.log('complete')
        }
       })

    } else {
      // La variable content es undefined o no tiene una propiedad id_content
      console.log('El contenido seleccionado es inválido. en on init');
    }

  }




  sendData(): void {

    if (this.selectedContent && this.selectedContent.id_content) {
    const numberUp = this.selectedContent.id_content;
    const token = localStorage.getItem('token') ?? ''
    this.ruta.params.subscribe(params => {
      this.task$
        .updateArt(numberUp, this.frmFormReactive.getRawValue(),token)
        .subscribe({
          next: data => {
            this.router.navigate(['EstacolNews/editor-side/main']);
          },
          error: err => console.log(err),
        });
    });

  }else{
    // La variable content es undefined o no tiene una propiedad id_content
    console.log('El contenido seleccionado es inválido.');
  }
  }
}
