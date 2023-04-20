import { Component } from '@angular/core';
import { ContentModel } from '../../../models/content.model';
import { ServicesService } from 'src/app/modules/EstacolNews/User/services.service';

@Component({
  selector: 'sofkaU-get-art-not-client',
  templateUrl: './get-art-not-client.component.html',
  styleUrls: ['./get-art-not-client.component.scss']
})
export class GetArtNotClientComponent {

  routergoBackMenu: string[];
  listContent: ContentModel[];
  selectedContent: ContentModel | undefined;
  butttonColor: any;

  constructor(private readonly taskService: ServicesService) {


    this.routergoBackMenu = ['../'];
    this.listContent = new Array<ContentModel>();


  }



  ngOnInit(): void {


    this.taskService.GetAllOtherCase().subscribe({
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
