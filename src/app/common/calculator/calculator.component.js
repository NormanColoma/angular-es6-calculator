const componentTemplate = require('./calculator.component.pug');

export class CalculatorComponentCtrl {
  constructor(){
  }

  $onInit() {
    this.lines = [];
  }

  ivaChanged({iva, base, total}) {
    if (angular.isDefined(base) && base != '') {
      this.total = Math.round(base * (1+iva/100));
    } else if (angular.isDefined(total) && total !='') {
      this.base = Math.round(total / (1+iva/100));
    }
  }

  baseChanged({iva, base, total}) {
    if (angular.isDefined(iva) && base != '') {
      this.total = Math.round(base * (1+iva/100));
    } else if(angular.isDefined(total)) {
      this.total = '';
    }
  }

  totalChanged({iva, base, total}) {
    if (angular.isDefined(iva) && total != '') {
        this.base = Math.round(total / (1+iva/100));
    } else if(angular.isDefined(base)) {
        this.base = '';
    }
  }

  onFormSubmit({iva, base, total, concept}) {
    const line = {
      concept,
      base,
      iva,
      total
    };
    const lines = [];
    lines.push(line);
    this.lines = lines;
  }
}

export const CalculatorComponent = {
  controller: CalculatorComponentCtrl,
  template: componentTemplate,
};