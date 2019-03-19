import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  { path: 'mondiales', loadChildren: './mondiales/mondiales.module#MondialesPageModule' },
  { path: 'mondiale', loadChildren: './mondiale/mondiale.module#MondialePageModule' },
  { path: 'financieres', loadChildren: './financieres/financieres.module#FinancieresPageModule' },
  { path: 'financiere', loadChildren: './financiere/financiere.module#FinancierePageModule' },
  { path: 'culturelles', loadChildren: './culturelles/culturelles.module#CulturellesPageModule' },
  { path: 'culturelle', loadChildren: './culturelle/culturelle.module#CulturellePageModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
