/**
 *
 * (c) 2013-2017 Wishtack
 *
 * $Id: $
 */


import * as angular from 'angular';

export const dragAndDropModule = angular.module('dragAndDrop', []);

const createEventDirective = (eventName) => ($parse) => (scope, element, attrs) => {

    const attributeName = `ng${eventName.charAt(0).toUpperCase()}${eventName.slice(1)}`;
    const fn = $parse(attrs[attributeName]);

    element.on(
        eventName,
        (event) => scope.$apply(() => fn(scope, {$event: event}))
    );

};

dragAndDropModule.directive('ngDragstart', createEventDirective('dragstart'));
dragAndDropModule.directive('ngDragover', createEventDirective('dragover'));
dragAndDropModule.directive('ngDrop', createEventDirective('drop'));