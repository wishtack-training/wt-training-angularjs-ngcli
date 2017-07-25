/**
 *
 * (c) 2013-2017 Wishtack
 *
 * $Id: $
 */


import * as angular from 'angular';

export const dragAndDropModule = angular.module('dragAndDrop', []);
[
    'dragend',
    'dragenter',
    'dragexit',
    'dragover',
    'dragstart',
    'drop'
].forEach((eventName) => {

    const attributeName = `ng${eventName.charAt(0).toUpperCase()}${eventName.slice(1)}`;

    dragAndDropModule.directive(
        attributeName,
        ($parse) => (scope, element, attrs) => {

            const fn = $parse(attrs[attributeName]);

            element.on(
                eventName,
                (event) => scope.$apply(() => fn(scope, {$event: event}))
            );

        });

});
