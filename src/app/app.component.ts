import { Component } from '@angular/core';
import { SwUpdateService } from './sw-update.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'sw-update-module-poc';

  constructor(private swUpdate: SwUpdateService) {}

  public checkForUpdate() {
    this.swUpdate.checkForUpdates();
  }
}
