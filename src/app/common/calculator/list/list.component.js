const componentTemplate = require('./list.component.pug');

export class ListCalculatorComponentCtrl {
    constructor(EventEmitter) {
        'ngInject';
        this.eventEmitter = EventEmitter;
    }

    $onInit() {
        this.empty = true;
    }

    $onChanges(changes) {
        if (changes.lines) {
            this.lines = Object.assign({}, changes.lines.currentValue);
            if (angular.equals({}, this.lines)) {
                this.empty = true;
            } else {
                this.empty = false;
            }
        }
    }

    deleteLine(id) {
        this.onDelete(this.eventEmitter({ id }));
    }
}

export const ListCalculatorComponent = {
    template: componentTemplate,
    controller: ListCalculatorComponentCtrl,
    bindings: {
        lines: '<',
        onDelete: '&'
    }
};