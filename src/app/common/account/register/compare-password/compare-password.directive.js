export class ComparePasswordDirective {
  constructor() {
    this.restrict = 'A';
    this.require = 'ngModel';
  }

  link(scope, element, attrs, ngModelController) {
    ngModelController.$validators.comparePassword = ((modelValue, viewValue) => {
      const password = viewValue;
      const passwordToCompare = scope.$ctrl.account.password;
      if (password === passwordToCompare) {
          return true;
      }
      return false;
    });
  }
}