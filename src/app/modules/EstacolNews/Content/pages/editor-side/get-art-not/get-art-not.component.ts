import { Component } from '@angular/core';
import { ServicesService } from '../../../../User/services.service';
import { ContentModel } from '../../../models/content.model';
import { CreatePublicationService } from '../../../services/create-publication.service';


@Component({
  selector: 'sofkaU-get-art-not',
  templateUrl: './get-art-not.component.html',
  styleUrls: ['./get-art-not.component.scss']
})
export class GetArtNotComponent {

  routergoBackMenu: string[];
  listContent: ContentModel[];
  selectedContent: ContentModel | undefined;


  constructor(private readonly taskService: ServicesService, private readonly createP: CreatePublicationService) {


    this.routergoBackMenu = ['../'];
    this.listContent = new Array<ContentModel>();


  }

  PublicationSelect() {

    if (this.selectedContent && this.selectedContent.id_content) {
      // La variable content no es undefined y tiene una propiedad id_content
      this.createP.CreatePublication(this.selectedContent.id_content);
    } else {
      // La variable content es undefined o no tiene una propiedad id_content
      console.log('El contenido seleccionado es inválido.');
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

