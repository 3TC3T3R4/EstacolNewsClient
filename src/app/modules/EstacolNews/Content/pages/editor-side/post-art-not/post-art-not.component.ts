import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ServicesService } from '../../../../User/services.service';

@Component({
  selector: 'sofkaU-post-art-not',
  templateUrl: './post-art-not.component.html',
  styleUrls: ['./post-art-not.component.scss']
})
export class PostArtNotComponent {


  frmFormReactive : FormGroup;
  routergoBackMenu: string[];


  constructor(private readonly task$: ServicesService, private router: Router) {

    this.routergoBackMenu = ['../'];
    this.frmFormReactive = new FormGroup({

      title: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
      ]),
      keywords: new FormControl('',[
        Validators.required,
        Validators.minLength(1),
      ]),
      finish_date:new FormControl('', [

      ]),
      publication_date:new FormControl('',  [
        Validators.required,

      ]),
      program_date:new FormControl('',  [
        Validators.required,

      ]),

      description:new FormControl('',  [
        Validators.required,
        Validators.max(28),
        Validators.min(1),
      ]),

    });


  }

  sendData(): void {

    console.log('sendData',this.frmFormReactive);
    const token = localStorage.getItem('token') ?? '';
    this.task$.createContent(this.frmFormReactive.getRawValue(),token).subscribe({
      next: data => this.router.navigate(['EstacolNews/editor-side/main']),
      error: err => console.log(err),
      complete: () => console.log('completo'),
    });



  }





}
