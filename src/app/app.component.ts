export class AppComponent {

    static CONFIG = {
        controller: AppComponent,
        template: require('./app.component.html')
    };

    constructor(private $state) {
    }

    currentStateIncludes(stateName) {
        return this.$state.includes(stateName);
    }

}
