import { Component } from '@angular/core';

import { TaskService } from '../../../User/services/auth/task.service';
@Component({
  selector: 'sofkaU-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {


  constructor(private readonly auth$:TaskService) {}



  authVariable():void{


    this.auth$.GoogleAuth();


  }


}
