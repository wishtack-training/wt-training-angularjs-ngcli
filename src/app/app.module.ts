
import * as angular from 'angular';
import { AppComponent } from './app.component';
import { ItemStore } from './item-store';
import { ItemListComponent } from './item-list.component';
import { ItemListV2Component } from './item-list-v2.component';
import { dragAndDropModule } from './drag-and-drop.module';

export const appModule = angular.module('app', [
    dragAndDropModule.name
]);

appModule.service('_itemStore', ItemStore);
appModule.component('wtApp', AppComponent.CONFIG);
appModule.component('wtItemList', ItemListComponent.CONFIG);
appModule.component('wtItemListV2', ItemListV2Component.CONFIG);

