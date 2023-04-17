import { Component, Inject, Input, OnInit,  } from '@angular/core';

@Component({
  selector: 'sofkaU-input-components',
  templateUrl: './input-components.component.html',
  styleUrls: ['./input-components.component.scss']
})
export class InputComponentsComponent implements OnInit {


@Input() title: string | undefined;
@Input() keywords: string | undefined;
@Input() publication_date: Date| undefined;;
@Input() finish_date: Date| undefined;;
@Input() program_date: Date| undefined;;
@Input() description: string| undefined;;

constructor(@Inject('title') title: string,
@Inject('keywords') keywords: string,
@Inject('publication_date') publication_date: Date,
@Inject('finish_date') finish_date: Date,
@Inject('program_date') program_date: Date,
@Inject('description') description: string )
{}


ngOnInit() {}


}
