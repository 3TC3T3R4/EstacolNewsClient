import { Component } from '@angular/core';
import * as auth from 'firebase/auth';
import { TaskService } from '../../../User/services/auth/task.service';
@Component({
  selector: 'sofkaU-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  routerTask: string[];

  constructor(private readonly auth$: TaskService) {

    this.routerTask = ['../editor-side/main'];

  }



  logout(): void {

    this.auth$.SignOut();

  }
}
