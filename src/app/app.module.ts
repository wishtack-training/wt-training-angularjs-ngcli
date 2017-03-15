
import * as angular from 'angular';
import 'angular-animate';
import 'angular-aria';
import 'angular-hero';
import 'angular-material';
import 'angular-ui-router';

/* Styles. */
import 'style-loader!angular-hero/angular-hero.css';
import 'style-loader!angular-material/angular-material.css';

import { AppComponent } from './app.component';
import { userModule } from './user/user.module';
import { appConfigurator } from './app.config';
import { viewsModule } from './views/views.module';


export const appModule = angular.module('app', [
    'alAngularHero',
    'ngAnimate',
    'ngMaterial',
    'ui.router',
    userModule.name,
    viewsModule.name
]);

appModule.component('wtApp', AppComponent.CONFIG);

appModule.config(appConfigurator);
