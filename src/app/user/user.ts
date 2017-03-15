/**
 *
 * (c) 2013-2017 Wishtack
 *
 * $Id: $
 */

export class User {

    id: string;
    firstName: string;
    lastName: string;

    static fromServerData(data) {
        return new User(data);
    }

    constructor({id = null, firstName = null, lastName = null} = {}) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
    }

}
