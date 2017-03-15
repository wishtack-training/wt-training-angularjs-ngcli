/**
 *
 * (c) 2013-2017 Wishtack
 *
 * $Id: $
 */

export class LoadingComponent {

    static CONFIG = {
        bindings: {
            'isReady': '<'
        },
        controller: LoadingComponent,
        template: `
<ng-transclude ng-show="$ctrl.isReady"></ng-transclude>
<div
        layout="row"
        layout-align="center center"
        ng-show="!$ctrl.isReady">
    <md-progress-circular
            class="md-hue-2"
            md-diameter="100px"></md-progress-circular>

</div>
`,
        transclude: true
    }

    isReady = false;

}
