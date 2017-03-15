/**
 *
 * (c) 2013-2017 Wishtack
 *
 * $Id: $
 */

import * as angular from 'angular';
import { UserDetailViewComponent } from './user-detail-view.component';
import { UserListViewComponent } from './user-list-view.component';

export const viewsModule = angular.module('app.views', []);

viewsModule.component('wtUserDetailView', UserDetailViewComponent.CONFIG);
viewsModule.component('wtUserListView', UserListViewComponent.CONFIG);
