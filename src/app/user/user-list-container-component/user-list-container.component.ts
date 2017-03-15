import { UserStore } from '../user-store';
import { User } from '../user';

/**
 *
 * (c) 2013-2017 Wishtack
 *
 * $Id: $
 */
export class UserListContainerComponent {

    static CONFIG = {
        controller: UserListContainerComponent,
        template: require('./user-list-container.component.html')
    };

    isSaving = false;
    userList: User[];

    constructor(
        private $mdToast,
        private userStore: UserStore) {
    }

    $onInit() {
        this._retrieveUserList();
    }

    addUser(user: User) {

        this.isSaving = true;

        this.$mdToast.show(
            this.$mdToast.simple()
                .textContent('Adding user...')
                .hideDelay(1000)
        );

        this.userStore.addUser(user)
            .then((_user) => {

                this.userList = [...this.userList, _user];

                this.isSaving = false;

                this.$mdToast.show(
                    this.$mdToast.simple()
                        .textContent('Success!')
                        .hideDelay(1000)
                );

            });
    }

    removeUser(user) {
        this.userStore.removeUser(user)
            .then(() => {
                this.userList = this.userList
                    .filter((_user) => _user.id !== user.id);
            });
    }

    private _retrieveUserList() {
        this.userStore.getUserList()
            .then((userList) => this.userList = userList)
            .catch(() => alert('Oups!'));
    }

}
