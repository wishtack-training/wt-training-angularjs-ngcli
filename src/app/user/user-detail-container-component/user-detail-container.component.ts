import { User } from '../user';
import { UserStore } from '../user-store';
/**
 *
 * (c) 2013-2017 Wishtack
 *
 * $Id: $
 */


export class UserDetailContainerComponent {

    static CONFIG = {
        bindings: {
            'userId': '<',
            'onUserUpdate': '&'
        },
        controller: UserDetailContainerComponent,
        template: `
<wt-user-form
    button-text="'UPDATE'"
    user="$ctrl.user"
    on-user-change="$ctrl.updateUser(user)"></wt-user-form>
`
    };

    user: User;
    userId: string;
    onUserUpdate: (user: User) => void;

    constructor(private userStore: UserStore) {
    }

    $onChanges(changes) {
        if (changes.userId) {
            this._retrieveUser();
        }
    }

    updateUser(user: User) {
        this.userStore.updateUser(user)
            .then(() => this.onUserUpdate(user));
    }

    private _retrieveUser() {
        this.userStore.getUser(this.userId)
            .then((user) => this.user = user);
    }

}
