/**
 *
 * (c) 2013-2017 Wishtack
 *
 * $Id: $
 */

import { User } from './user';

export class UserStore {

    private static _RESOURCE_URL = 'http://2017-03-15.getsandbox.com/users';

    private _$http;

    constructor($http) {
        this._$http = $http;
    }

    getUser(userId: string): Promise<User> {

        return this._$http.get(`${UserStore._RESOURCE_URL}/${userId}`)
            .then((response) => User.fromServerData(response.data));

    }

    getUserList(): Promise<User[]> {

        return this._$http.get(UserStore._RESOURCE_URL)
            .then((response) => {
                return response.data.map((userData) => User.fromServerData(userData));
            });

    }

    addUser(user: User): Promise<User> {

        return this._$http.post(UserStore._RESOURCE_URL, user)
            .then((response) => User.fromServerData(response.data));

    }


    removeUser(user: User) {

        return this._$http.delete(`${UserStore._RESOURCE_URL}/${user.id}`);

    }

    updateUser(user: User): Promise<User> {

        return this._$http.patch(`${UserStore._RESOURCE_URL}/${user.id}`, user)
            .then((response) => User.fromServerData(response.data));

    }

}
