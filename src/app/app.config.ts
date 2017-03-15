/**
 *
 * (c) 2013-2017 Wishtack
 *
 * $Id: $
 */

import { viewsStateList } from './views/views.states';

export const appConfigurator = ($locationProvider,
                                $urlRouterProvider,
                                $stateProvider) => {

    $stateProvider.state({
        name: 'landing',
        template: `<div>Welcome</div>`,
        url: '/landing'
    });

    viewsStateList.forEach(state => $stateProvider.state(state));

    /* Default route. */
    $urlRouterProvider.otherwise('/landing');

    /* Setting HTML5 routing mode. */
    $locationProvider.html5Mode(true);

};
