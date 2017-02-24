import angular from 'angular';
import uiRouter from 'angular-ui-router';
import 'angular-ui-router/release/stateEvents';
import ngMessages from 'angular-messages';

import { CalculatorModule } from './calculator/calculator.module';
import { LoginModule } from './login/login.module';
import { AuthService } from './auth/auth.service';

export const CommonModule = angular
  .module('common.module', [
    CalculatorModule,
    LoginModule,
    uiRouter,
    'ui.router.state.events',
    ngMessages
  ])
  .service('AuthService', AuthService)
  .config(($urlRouterProvider, $stateProvider) => {
    'ngInject';

    $urlRouterProvider.otherwise('/login');
  })
  .name;