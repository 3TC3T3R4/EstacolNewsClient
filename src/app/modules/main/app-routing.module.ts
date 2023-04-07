import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    //carga perezosa
    path: '', //localhost 4200/EstacolNews
    loadChildren: () => import('../EstacolNews/estacolnews.module').
    then(m => m.EstacolNewsModule)

  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
