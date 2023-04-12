export class NewContentModel {


  title: string;
  keywords: string;
  finish_date: Date;
  publication_date: Date;
  program_date: Date;
  description:string;

  constructor(title: string, keywords: string, finish_date: Date, publication_date: Date, program_date: Date, description:string) {

    this.title = title;
    this.keywords = keywords;
    this.finish_date = finish_date;
    this.publication_date = publication_date;
    this.program_date = program_date;
    this.description = description;


  }
}
