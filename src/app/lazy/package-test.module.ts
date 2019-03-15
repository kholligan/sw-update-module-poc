import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { OutsideComponent } from 'sw-update-package-poc';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: '', component: OutsideComponent, pathMatch: 'full' }
    ])
  ]
})
export class PackageTestModule { }
