import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalhesUsuarioComponent } from './detalhes-usuario/detalhes-usuario.component';
import { ListComponent } from './list/list.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'todos'},
  { path: 'detalhes-usuario', component: DetalhesUsuarioComponent },
  { path: 'todos', component: ListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
