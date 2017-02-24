const componentTemplate = require('./register.component.pug');

export class RegisterComponentCtrl {
    constructor(AuthService, $state) {
        'ngInject';

        this.authService = AuthService;
        this.state = $state;
    }

    $onInit() {
        this.account = {};
        if (this.authService.isLoggedIn()) {
            this.state.go('calculator');
        }
    }
}

export const RegisterComponent = {
    template: componentTemplate,
    controller: RegisterComponentCtrl
}
