import { Component } from '@angular/core';
import { ServicesService } from '../../../../User/services.service';
import { IContent } from '../../../interfaces/content.interface';
import { ContentModel } from '../../../models/content.model';

@Component({
  selector: 'sofkaU-get-art-not',
  templateUrl: './get-art-not.component.html',
  styleUrls: ['./get-art-not.component.scss']
})
export class GetArtNotComponent {

  routergoBackMenu: string[];
  listContent: ContentModel[];
  idUser: string;

  constructor(private readonly taskService: ServicesService) {


    this.routergoBackMenu = ['../'];
    this.listContent = new Array<ContentModel>();
    this.idUser = localStorage.getItem('uid')?? '';


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
