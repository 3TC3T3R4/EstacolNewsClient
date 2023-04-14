import { Component } from '@angular/core';
import { ServicesService } from '../../../../services.service';
import { ContentModel } from 'src/app/modules/EstacolNews/Content/models/content.model';

@Component({
  selector: 'sofkaU-lobby',
  templateUrl: './lobby.component.html',
  styleUrls: ['./lobby.component.scss']
})
export class LobbyComponent {


  listContent: ContentModel[];

  constructor(private readonly taskService: ServicesService) {


    this.listContent = new Array<ContentModel>();


  }

  public react(postId: number, reaction: string) {
    // Handle reacting to a post
  }

  public share(postId: number) {
    // Handle sharing a post
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
