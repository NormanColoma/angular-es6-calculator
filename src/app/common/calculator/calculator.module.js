import angular from 'angular';
import uiRouter from 'angular-ui-router';

import { CalculatorComponent } from './calculator.component';
import { FormCalculatorModule } from './form/form.module';

export const CalculatorModule = angular 
    .module('calculator.module', [
        FormCalculatorModule,
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