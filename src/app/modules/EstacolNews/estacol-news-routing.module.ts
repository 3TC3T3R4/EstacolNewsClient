import { NgModule } from '@angular/core';
//import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

//pages





const routes : Routes = [
 /*
  {
    path: '', //localhost:4200/calendar-todo-list
    component: LoginComponent,
    si puede o no entrar
    canActivate: [AngularFireAuthGuard],
    data:{authGuardPipe: redirectLoggedInToDashboard}
  },
  {
    path: 'calendar-todo-list/login', //localhost:4200/calendar-todo-list
    component: LoginComponent,
  },
  {
    path: 'calendar-todo-list/dashboard', //localhost:4200/calendar-todo-list
    component: DashboardComponent,
    canActivate: [AngularFireAuthGuard],
    data:{authGuardPipe: redirectUnauthorizedToLogin}
  },
  {
    path: 'calendar-todo-list/principal', //localhost:4200/calendar-todo-list
    component: PrincipalComponent,
  },
  {
    path: 'calendar-todo-list/principal/get-task', //localhost:4200/calendar-todo-list/get-task
    component: GetTaskComponent,
  },
  {
    path: 'calendar-todo-list/principal/get-task-by-id', //localhost:4200/calendar-todo-list
    component: GetTaskByIdComponent,
  },
  {
      path: 'calendar-todo-list/principal/post-task', //localhost:4200/calendar-todo-list
      component: PostTaskComponent,
  },
  {
    path: 'calendar-todo-list/principal/put-task', //localhost:4200/calendar-todo-list
    component: PutTaskComponent,

  },
  {
    path: 'calendar-todo-list/principal/post-task', //localhost:4200/calendar-todo-list
    component: PostTaskComponent,

  },
  {
    path: 'calendar-todo-list/principal/put-task-complete', //localhost:4200/calendar-todo-list
    component: PutTaskCompleteComponent,

 },
 {
  path: 'calendar-todo-list/principal/delete-task', //localhost:4200/calendar-todo-list
  component: DeleteTaskComponent,

},

{
  path: 'calendar-todo-list/principal/component1', //localhost:4200/calendar-todo-list
  component: Componente1Component,

},
{
  path: 'calendar-todo-list/principal/get-only-task', //localhost:4200/calendar-todo-list
  component: GetOnlyTaksComponent,

}
 */
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [ RouterModule ]
})
export class EstacolNewsRoutingModule { }
