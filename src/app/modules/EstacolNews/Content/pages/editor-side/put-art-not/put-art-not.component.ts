import { Component } from '@angular/core';
import { IContent } from '../../../interfaces/content.interface';
import { ServicesService } from '../../../../User/services.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ContentModel } from '../../../models/content.model';

@Component({
  selector: 'sofkaU-put-art-not',
  templateUrl: './put-art-not.component.html',
  styleUrls: ['./put-art-not.component.scss']
})
export class PutArtNotComponent {

  routergoBackMenu: string[];
  frmFormReactive : FormGroup;
 // idU: number;
  listContent: ContentModel[];


  constructor(private readonly task$: ServicesService,private ruta: ActivatedRoute,private router: Router) {

   // this.idU = localStorage.getItem('uid')?? '';
    this.listContent = new Array<ContentModel>();
    this.routergoBackMenu = ['../'];

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


    this.task$.GetAll().subscribe({
    next: (data) => {(this.listContent = data)

        this.ruta.params.subscribe(params => {
         this.task$.getContentById(params['id_content'],localStorage.getIte m ).subscribe({
           next: data => {this.frmFormReactive.setValue({
            title: data[0].title,
            description: data[0].descripccion,
            responsible: data[0].resposible,
            isCompleted: data[0].isCompleted})
          },

          error: (err) => {
            console.log(err),console.log(this.calendarWithTask)
          },
          complete: () => {
            console.log('complete')
          }
        })
      })
    },error: (err) => {
      console.log(err),console.log(this.calendarWithTask)
    },complete: () => {
      console.log('complete')
    }
   })
  }




  sendData(): void {
    this.frmFormReactive
      .get('isCompleted')?.setValue(JSON.parse(this.frmFormReactive.get('isCompleted')?.value));
    this.ruta.params.subscribe(params => {
      this.task$
        .updateTaskCompleted(this.frmFormReactive.get('id')?.value, this.frmFormReactive.getRawValue(),this.idU)
        .subscribe({
          next: data => {
            this.router.navigate(['calendar-todo-list/dashboard']);
          },
          error: err => console.log(err),
        });
    });
  }
}













}
