const componentTemplate = require('./calculator.component.pug');

export class CalculatorComponentCtrl {
  constructor(){
  }

  $onInit() {
    this.BASE = 'base';
    this.IVA = 'iva';
    this.TOTAL = 'Total';
  }

  valueChanged(value) {
    switch(value) {
        case this.BASE:
          this.baseChanged();
          break;
        case this.IVA:
          this.ivaChanged();
          break;
        case this.TOTAL:
          this.totalChanged();
          break;
    }
  }

  ivaChanged() {
    if (angular.isDefined(this.base) && this.base != '') {
      this.total = Math.round(this.base * (1+this.iva/100));
    } else if (angular.isDefined(this.total) && this.total !='') {
      this.base = Math.round(this.total / (1+this.iva/100));
    }
  }

  baseChanged() {
    if (angular.isDefined(this.iva) && this.base != '') {
        this.total = Math.round(this.base * (1+this.iva/100));
    } else if(angular.isDefined(this.total)) {
      this.total = '';
    }
  }

  totalChanged() {
    if (angular.isDefined(this.iva) && this.total != '') {
        this.base = Math.round(this.total / (1+this.iva/100));
    } else if(angular.isDefined(this.base)) {
        this.base = '';
    }
  }
}

export const CalculatorComponent = {
  controller: CalculatorComponentCtrl,
  template: componentTemplate,
};