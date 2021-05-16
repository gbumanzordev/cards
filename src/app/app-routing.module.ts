import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'cartas',
    // Lazy loading
    loadChildren: () =>
      import('./cartas/cartas.module').then((m) => m.CartasModule),
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'cartas',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
