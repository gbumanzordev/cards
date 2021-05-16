import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaComponent } from './components/lista/lista.component';
import { DetallesComponent } from './components/detalles/detalles.component';

const routes: Routes = [
  {
    path: 'list',
    component: ListaComponent,
  },
  {
    path: ':id',
    component: DetallesComponent,
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'list',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CartasRoutingModule {}
