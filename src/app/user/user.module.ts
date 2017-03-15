/**
 *
 * (c) 2013-2017 Wishtack
 *
 * $Id: $
 */

import * as angular from 'angular';
import { UserStore } from './user-store';
import { UserListContainerComponent } from './user-list-container-component/user-list-container.component';
import { UserListComponent } from './user-list-component/user-list.component';
import { UserFormComponent } from './user-form-component/user-form.component';
import { UserDetailContainerComponent } from './user-detail-container-component/user-detail-container.component';
import { LoadingComponent } from './loading.component';

export const userModule = angular.module('app.user', []);

userModule.component('wtUserDetailContainer', UserDetailContainerComponent.CONFIG)
userModule.component('wtUserForm', UserFormComponent.CONFIG);
userModule.component('wtUserList', UserListComponent.CONFIG);
userModule.component('wtUserListContainer', UserListContainerComponent.CONFIG);

// @todo: should be in a dedicated module.
userModule.component('wtLoading', LoadingComponent.CONFIG);

userModule.service('userStore', UserStore);
