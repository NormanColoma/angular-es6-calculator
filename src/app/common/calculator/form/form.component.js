const componentTemplate = require('./form.component.pug');

export class FormComponentCtrl {
    constructor() {

    }

    $onInit() {
        this.BASE = 'base';
        this.IVA = 'iva';
        this.TOTAL = 'Total';
    }

    $onChanges(changes) {
        if (changes.base) {
            this.base = Object.assign({}, changes.base.currentValue);
        }

        if (changes.iva) {
            this.iva = Object.assign({}, changes.iva.currentValue);
        }

        if (changes.total) {
            this.total = Object.assign({}, changes.total.currentValue);
        }
    }

    valueChanged(value) {
        this.onValueChanged(value);
    }
}

export const FormCalculatorComponent = {
    template: componentTemplate,
    controller: FormComponentCtrl,
    bindings: {
        base: '<',
        total: '<',
        iva: '<',
        onValueChanged: '&'
    }
}
