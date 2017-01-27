import angular from 'angular';
import uiRouter from 'angular-ui-router';

import { CalculatorComponent } from './calculator.component';

export const CalculatorModule = angular 
    .module('calculator.module', [
        uiRouter
    ])
    .component('calculatorComponent', CalculatorComponent)
    .config(($stateProvider) => {
        'ngInject'; 

        $stateProvider
            .state('calculator', {
                 url: '/calculator',
                 template: '<calculator-component></calculator-component>'
            })
    })
    .name;