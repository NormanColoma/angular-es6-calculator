const componentTemplate = require('./form.component.pug');

class LoginFormComponentCtrl {
    constructor(EventEmitter) {
        'ngInject';

        this.eventEmitter = EventEmitter;
    }

    $onInit() {

    }

    $onChanges(changes) {
        if (changes.credentials && !changes.credentials.isFirstChange()) {
            this.credentials = Object.assign({}, changes.credentials.currentValue);
        }
    }

    submitForm(){
        this.onLogin(this.eventEmitter({ credentials: this.credentials }));
    }

}

export const LoginFormComponent = {
    template: componentTemplate,
    controller: LoginFormComponentCtrl,
    bindings: {
        credentials: '<',
        onLogin: '&'
    }
}