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

    registerUser(){
        const user = {
            email: this.account.email,
            pass: this.account.password
        }
        this.authService.registerUser(user).then(() => {
            this.state.go('login');
        });
    }
}

export const RegisterComponent = {
    template: componentTemplate,
    controller: RegisterComponentCtrl
}
