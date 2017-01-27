import angular from 'angular';
import uiRouter from 'angular-ui-router';
import 'angular-ui-router/release/stateEvents';

import { CalculatorModule } from './calculator/calculator.module';

export const CommonModule = angular
  .module('common.module', [
    CalculatorModule,
    uiRouter,
    'ui.router.state.events'
  ])
  .config(($urlRouterProvider, $stateProvider) => {
    'ngInject';

    $urlRouterProvider.otherwise('/calculator');
  })
  .name;