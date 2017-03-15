/**
 *
 * (c) 2013-2017 Wishtack
 *
 * $Id: $
 */

export const viewsStateList = [
    {
        name: 'userList',
        template: `<wt-user-list-view></wt-user-list-view>`,
        url: '/users'
    },
    {
        name: 'userDetail',
        template: `<wt-user-detail-view></wt-user-detail-view>`,
        url: '/users/:userId'
    }
];
