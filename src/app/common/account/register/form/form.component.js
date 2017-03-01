const componentTemplate = require('./form.component.pug');

class RegisterFormComponentCtrl {
    constructor(EventEmitter) {
        'ngInject';

        this.eventEmitter = EventEmitter;
    }

    $onChanges(changes) {
        if (changes.account && !changes.account.isFirstChange()) {
            this.account = Object.assign({}, changes.account.currentValue);
        }
    }

    register(){
        this.onRegister(this.eventEmitter({ account: this.account }));
    }
}

export const RegisterFormComponent = {
    template: componentTemplate,
    controller: RegisterFormComponentCtrl,
    bindings: {
        account: '<',
        onRegister: '&'
    }
}