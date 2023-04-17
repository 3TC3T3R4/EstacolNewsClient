export class ContentModel {

  id_content: number;
  title: string;
  estate_process: string;
  estate: boolean;
  keywords: string;
  type_publication: string;
  url: string;
  finish_date: Date;
  publication_date: Date;
  program_date: Date;
  number_of_collaborators: number;
  likes: number;
  dislikes: number;
  number_of_share: number;
  description:string;

  constructor( id_content: number, title: string, estate_process: string, estate: boolean, keywords: string, type_publication: string, url: string, finish_date: Date, publication_date: Date, program_date: Date, number_of_collaborators: number, likes: number, dislikes: number, number_of_share: number, description:string) {

    this.id_content = id_content;
    this.title = title;
    this.estate_process = estate_process;
    this.estate = estate;
    this.keywords = keywords;
    this.type_publication = type_publication;
    this.url = url;
    this.finish_date = finish_date;
    this.publication_date = publication_date;
    this.program_date = program_date;
    this.number_of_collaborators = number_of_collaborators;
    this.likes = likes;
    this.dislikes = dislikes;
    this.number_of_share = number_of_share;
    this.description = description;

  }


  getData():{id_content: number, title: string, estate_process: string, estate: boolean, keywords: string, type_publication: string, url: string, finish_date: Date, publication_date: Date, program_date: Date, number_of_collaborators: number, likes: number, dislikes: number, number_of_share: number, description:string}{

    return {
      id_content: this.id_content,
      title: this.title,
      estate_process: this.estate_process,
      estate: this.estate,
      keywords: this.keywords,
      type_publication: this.type_publication,
      url: this.url,
      finish_date: this.finish_date,
      publication_date: this.publication_date,
      program_date: this.program_date,
      number_of_collaborators: this.number_of_collaborators,
      likes: this.likes,
      dislikes: this.dislikes,
      number_of_share: this.number_of_share,
      description: this.description
    }
  }



  }


