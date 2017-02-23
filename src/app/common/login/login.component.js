const componentTemplate = require('./login.component.pug');

export class LoginComponentCtrl {
    constructor(AuthService, $state) {
        'ngInject';

        this.authService = AuthService;
        this.state = $state;
    }

    $onInit() {
        this.credentials = {};
    }

    login(){
        if(this.authService.login(this.credentials.email, this.credentials.password)) {
            this.state.go('calculator');
        }
    }
}

export const LoginComponent = {
    template: componentTemplate,
    controller: LoginComponentCtrl
};