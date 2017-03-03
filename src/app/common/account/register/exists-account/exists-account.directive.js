export class ExistsAccountDirective {
  constructor(AuthService) {
    this.restrict = 'A';
    this.require = 'ngModel';
    this.authService = AuthService;
  }

  link(scope, element, attrs, ngModelController) {
    ngModelController.$validators.existsAccount = ((modelValue, viewValue) => {
      const account = viewValue;
      if (typeof account != 'undefined'){
        const result = this.authService.existsAccount(account);
        if (result) {
          return false;
        }
      }
      return true;
    });
  }
}