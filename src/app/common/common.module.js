import angular from 'angular';
import uiRouter from 'angular-ui-router';
import 'angular-ui-router/release/stateEvents';
import ngMessages from 'angular-messages';

import { CalculatorModule } from './calculator/calculator.module';
import { AuthService } from './auth/auth.service';
import { AccountModule } from './account/account.module';

export const CommonModule = angular
  .module('common.module', [
    CalculatorModule,
    uiRouter,
    'ui.router.state.events',
    ngMessages,
    AccountModule
  ])
  .service('AuthService', AuthService)
  .config(($urlRouterProvider, $stateProvider) => {
    'ngInject';

    $urlRouterProvider.otherwise('/login');
  })
  .name;