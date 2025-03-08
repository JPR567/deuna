import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // Redirige la raíz ('') a 'home'
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  // Ruta para la página Home (standalone)
  {
    path: 'home',
    loadComponent: () =>
      import('./home/home.page').then(m => m.HomePage)
  },

  // Ruta para la página Inicio (standalone)
  {
    path: 'inicio',
    loadComponent: () =>
      import('./inicio/inicio.page').then(m => m.InicioPage)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
