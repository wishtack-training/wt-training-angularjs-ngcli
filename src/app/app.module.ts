
import * as angular from 'angular';
import { AppComponent } from './app.component';

export const appModule = angular.module('app', []);


appModule.component('wtApp', AppComponent.CONFIG);