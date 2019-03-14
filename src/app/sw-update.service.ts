import { Injectable } from '@angular/core';

import { MatSnackBar } from '@angular/material';
import { SwUpdate } from '@angular/service-worker';

@Injectable()
export class SwUpdateService {
  constructor(private swUpdate: SwUpdate, private snackbar: MatSnackBar) {
    if (!this.swUpdate.isEnabled) {
      console.log('swUpdate not enabled');
    } else {
      console.log('swUpdate enabled');
    }
    this.swUpdate.available.subscribe(evt => {
      console.log('update event avail', evt);
      const snack = this.snackbar.open('Update Available', 'Reload');

      snack
        .onAction()
        .subscribe(() => {
          window.location.reload();
        });
    });

    setInterval(() => {
      this.swUpdate.checkForUpdate();
    }, 10000);
  }
}
