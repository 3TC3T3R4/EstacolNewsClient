import { Component } from '@angular/core';
import * as auth from 'firebase/auth';
import { TaskService } from '../../../User/services/auth/task.service';
import { ServicesService } from '../../../User/services.service';
import { UserModel } from '../../../User/models/user.model';
import { NewUserModel } from '../../../User/models/new-user.model';
@Component({
  selector: 'sofkaU-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  routerTask: string[];

  routerClient: string[];

  userRole: NewUserModel | undefined;

  isAdmin:  boolean| undefined;

  constructor(private readonly auth$: TaskService, private readonly role: ServicesService) {

    this.routerTask = ['../editor-side/main'];
    this.routerClient = ['../User/client-side/lobby'];

  }
  logout(): void {

    this.auth$.SignOut();

  }

  ngOnInit() {
    // Obtener el rol del usuario del servicio de autenticación

    this.role.getUserById(localStorage.getItem('uid') ?? '', localStorage.getItem('token') ?? '').subscribe((response) => {
      this.userRole = response,
      this.isAdmin = this.userRole?.id_fire === '7chHUjuyE6Pmi80EvxzHUJelK1G3' ? true : false;
    })



  }










}
