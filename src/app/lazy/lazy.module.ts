import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ModuletestaComponent } from 'projects/moduletesta/src/public_api';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: '', component: ModuletestaComponent, pathMatch: 'full' }
    ])
  ]
})
export class LazyModule { }
