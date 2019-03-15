import { Component } from '@angular/core';
import { SwUpdateService } from './sw-update.service';
import { Router } from '@angular/router';
import { routerNgProbeToken } from '@angular/router/src/router_module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'sw-update-module-poc';

  constructor(private swUpdate: SwUpdateService, private router: Router) {}

  public checkForUpdate() {
    this.swUpdate.checkForUpdates();
  }

  public activateLibraryComponent() {
    this.router.navigate(['lazy']);
  }

  public activateExternalPackageComponent() {
    this.router.navigate(['package']);
  }
}
