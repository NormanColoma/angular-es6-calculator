const componentTemplate = require('./list.component.pug');

export class ListCalculatorComponentCtrl {
    constructor() {

    }

    $onChanges(changes) {
        if(changes.lines) {
            this.lines = Object.assign({}, changes.lines.currentValue);
        }
    }
}

export const ListCalculatorComponent = {
    template: componentTemplate,
    controller: ListCalculatorComponentCtrl,
    bindings: {
        lines: '<'
    }
};