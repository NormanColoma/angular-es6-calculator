const componentTemplate = require('./login.component.pug');

export class LoginComponentCtrl {
    constructor(AuthService, $state, $timeout) {
        'ngInject';

        this.authService = AuthService;
        this.state = $state;
        this.timeout = $timeout;
    }

    $onInit() {
        this.credentials = {};
        this.loginErrors = false;
    }

    login({ credentials }){
        this.credentials = Object.assign({}, credentials);
        if(this.authService.login(this.credentials.email, this.credentials.password)) {
            this.state.go('calculator');
        } else {
            this.loginErrors = true;
        }
    }

    onClosedAlert() {
        this.loginErrors = false;
    }
}

export const LoginComponent = {
    template: componentTemplate,
    controller: LoginComponentCtrl
};