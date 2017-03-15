/**
 *
 * (c) 2013-2017 Wishtack
 *
 * $Id: $
 */

import { User } from '../user';

export class UserFormComponent {

    static CONFIG = {
        bindings: {
            buttonText: '<',
            user: '<',
            onUserChange: '&'
        },
        controller: UserFormComponent,
        template: require('./user-form.component.html')
    };

    onUserChange;

    buttonText: string;
    user: User;

    $onChanges() {

        if (this.buttonText === undefined) {
            this.buttonText = 'ADD';
        }

        if (this.user === undefined) {
            this.user = new User();
        }

    }

    saveUser() {
        /* Calling parent component's onUserAdd binding. */
        this.onUserChange({user: this.user});
        this.user = new User();
    }

}
