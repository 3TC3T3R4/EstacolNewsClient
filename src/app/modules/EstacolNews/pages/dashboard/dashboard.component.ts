import { Component } from '@angular/core';
import * as auth from 'firebase/auth';
import { AuthService } from '../../services/auth/auth.service';
@Component({
  selector: 'sofkaU-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  routerTask: string[];

  constructor(private readonly auth$: AuthService) {

    this.routerTask = ['../editor-side/main'];

  }



  logout(): void {

    this.auth$.SignOut();

  }
}
