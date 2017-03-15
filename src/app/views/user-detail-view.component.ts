/**
 *
 * (c) 2013-2017 Wishtack
 *
 * $Id: $
 */

import { User } from '../user/user';

export class UserDetailViewComponent {

    static CONFIG = {
        controller: UserDetailViewComponent,
        template: `
<wt-user-detail-container
    user-id="$ctrl.userId"
    on-user-update="$ctrl.goToUserList()"></wt-user-detail-container>`
    };

    userId: string;

    constructor(private $state) {
    }

    $onInit() {
        this.userId = this.$state.params.userId;
    }

    goToUserList() {
        this.$state.go('userList');
    }

}
