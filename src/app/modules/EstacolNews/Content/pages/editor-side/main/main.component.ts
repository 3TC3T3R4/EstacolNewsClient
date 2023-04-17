import { Component } from '@angular/core';

@Component({
  selector: 'sofkaU-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})


export class MainComponent {


  routerPostTask: string[];
  routerGetTaskById: string[];
  routerPutTaskById: string[];
  routerDeleteTaskById: string[];
  routerdashboard: string[];
  routerPostTaskPublic: string[];

  constructor() {

    this.routerPostTask = ['post-art-not'];
    this.routerGetTaskById = ['get-art-not'];
    this.routerPutTaskById = ['put-art-not'];
    this.routerDeleteTaskById = ['delete-art-not'];
    this.routerdashboard = [''];
    this.routerPostTaskPublic = ['post-public-art-not'];

  }


}
