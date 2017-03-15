// import { enableProdMode } from '@angular/core';
// import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
//
// import { AppModule } from './app/app.module';
// import { environment } from './environments/environment';
//
// if (environment.production) {
//   enableProdMode();
// }
//

import * as angular from 'angular';
import { appModule } from './app/app.module';

angular.element(document)
    .ready(() => angular.bootstrap(document.body, [appModule.name]));
