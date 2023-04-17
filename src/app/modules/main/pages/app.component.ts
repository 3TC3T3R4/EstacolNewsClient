import { Component } from '@angular/core';

@Component({
  selector: 'sofkaU-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'EstacolNews';
  routerTask: string[];

  constructor(){


    this.routerTask = ['EstacolNews/login'];


  }

}
