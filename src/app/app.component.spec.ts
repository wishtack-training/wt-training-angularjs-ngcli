
import * as angular from 'angular';
import { appModule } from './app.module';

describe('AppComponent', () => {

    let $compile;
    let $rootScope;
    let $scope;

    beforeEach(angular.mock.module(appModule.name));

    beforeEach(angular.mock.inject((
        _$compile_,
        _$rootScope_
    ) => {
        $compile = _$compile_;
        $rootScope = _$rootScope_;
    }));

    beforeEach(() => {
        $scope = $rootScope.$new();
    });

    it('should say hi', () => {

        const element = $compile('<wt-app>')($scope)[0];

        $scope.$digest();

        expect(element.textContent.trim()).toEqual(`Let's NG!`);

    });

});
