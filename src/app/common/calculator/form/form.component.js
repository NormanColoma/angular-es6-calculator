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
        if (changes.total) {
            if (!changes.total.isFirstChange()) {
                this.total = angular.copy(this.total);
            }
        }

        if (changes.base) {
            if (!changes.base.isFirstChange()) {
                this.base = angular.copy(this.base);
            }
        }
    }

    valueChanged(value) {
        switch(value) {
            case this.BASE:
                this.onBaseChanged(this.eventEmitter({ iva: this.iva, base: this.base, total: this.total }));
                break;
            case this.IVA:
                this.onIvaChanged(this.eventEmitter({ iva: this.iva, base: this.base, total: this.total }));
                break;
            case this.TOTAL:
                this.onTotalChanged(this.eventEmitter({ iva: this.iva, base: this.base, total: this.total }));
                break;
        }
    }

    formSubmit() {
        this.onFormSubmit(this.eventEmitter({ iva: this.iva, base: this.base, total: this.total, concept: this.concept }))
    }
}

export const FormCalculatorComponent = {
    template: componentTemplate,
    controller: FormComponentCtrl,
    bindings: {
        base: '<',
        total: '<',
        onBaseChanged: '&',
        onTotalChanged: '&',
        onIvaChanged: '&',
        onFormSubmit: '&'
    }
}
