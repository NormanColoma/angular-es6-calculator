const componentTemplate = require('./form.component.pug');

export class FormComponentCtrl {
    constructor(EventEmitter) {
        'ngInject';

        this.eventEmitter = EventEmitter;
    }

    $onInit() {
        this.BASE = 'base';
        this.IVA = 'iva';
        this.TOTAL = 'Total';
    }

    $onChanges(changes) {
    }
}

export const FormCalculatorComponent = {
    template: componentTemplate,
    controller: FormComponentCtrl,
    bindings: {}
}
