import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    //carga perezosa
    path: '', //localhost 4200/estacolnews
    loadChildren: () => import('../EstacolNews/estacol-news.module').
    then(m => m.EstacolNewsModule)

  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
