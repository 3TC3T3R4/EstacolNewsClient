export class PublicationModel{

  id_publication: number;
  id_editor_publication: string;
  id_content_publication: number;



  constructor(id_publication: number, id_editor_publication: string, id_content_publication: number) {
    this.id_publication = id_publication;
    this.id_editor_publication = id_editor_publication;
    this.id_content_publication = id_content_publication;
  }



}
