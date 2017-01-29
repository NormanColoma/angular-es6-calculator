const componentTemplate = require('./calculator.component.pug');

export class CalculatorComponentCtrl {
  constructor(CalculatorService) {
    'ngInject';

    this.calculatorService = CalculatorService;
  }

  $onInit() {
    this.lines = [];
  }

  ivaChanged({iva, base, total}) {
    if (angular.isDefined(base) && base != '') {
      this.total = this.calculatorService.calculateTotal(iva, base);
    } else if (angular.isDefined(total) && total !='') {
      this.base = this.calculatorService.calculateBase(iva, total);
    }
  }

  baseChanged({iva, base, total}) {
    if (angular.isDefined(iva) && base != '') {
      this.total = this.calculatorService.calculateTotal(iva, base);
    } else if(angular.isDefined(total)) {
      this.total = '';
    }
  }

  totalChanged({iva, base, total}) {
    if (angular.isDefined(iva) && total != '') {
        this.base = this.calculatorService.calculateBase(iva, total);
    } else if(angular.isDefined(base)) {
        this.base = '';
    }
  }

  onFormSubmit({iva, base, total, concept}) {
    const line = {
      concept,
      base,
      iva,
      total,
      id: this.calculatorService.generateId()
    };
    this.lines = Object.assign({}, this.calculatorService.addLine(line));
  }

  onDelete({ id }) {
    console.log(id);
    this.lines = Object.assign({}, this.calculatorService.removeLine(id));
  }
}

export const CalculatorComponent = {
  controller: CalculatorComponentCtrl,
  template: componentTemplate,
};