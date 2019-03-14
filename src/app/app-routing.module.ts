import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModuletestaComponent } from 'projects/moduletesta/src/public_api';

const routes: Routes = [
  // {
  //   path: 'moduletesta',
  //   component: ModuletestaComponent
  // },
  {
    path: 'lazy',
    loadChildren: './lazy/lazy.module#LazyModule'
  },
  {
    path: '',
    redirectTo: '/lazy',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
