const componentTemplate = require('./form.component.pug');

require('./form.component.scss');

class LoginFormComponentCtrl {
    constructor(EventEmitter) {
        'ngInject';

        this.eventEmitter = EventEmitter;
    }

    $onInit() {

    }

    $onChanges(changes) {
        if (changes.credentials && !changes.credentials.isFirstChange()) {
            this.changes = Object.assign({}, changes.currentValue);
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