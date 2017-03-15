/**
 *
 * (c) 2013-2017 Wishtack
 *
 * $Id: $
 */

import { User } from '../user';

import 'style-loader!./user-list.component.scss';


export class UserListComponent {

    static CONFIG = {
        // test
        bindings: {
            // Input.
            userList: '<',
            // Output.
            onUserRemove: '&'
        },
        controller: UserListComponent,
        template: require('./user-list.component.html'),
        transclude: {
            header: '?wtHeader',
            footer: '?wtFooter'
        }
    };

    userList: User[];

    onUserRemove;

    constructor() {
    }

    $onChanges(changes) {

        if (changes.userList != null) {
            this._onUserListChange(changes.userList);
        }

    }

    removeUser(user: User) {
        this.onUserRemove({user: user});
    }

    private _onUserListChange(change) {

        let {previousValue = [], currentValue = []} = change;

        if (currentValue.length === previousValue.length) {
            return;
        }

        if (currentValue.length > previousValue.length) {
            console.log('+1');
        }
        else {
            console.log('-1');
        }

    }
}
