import angular from 'angular';
import uiRouter from 'angular-ui-router';

import { CalculatorComponent } from './calculator.component';
import { FormCalculatorModule } from './form/form.module';
import { ListCalculatorModule } from './list/list.module';
import { CalculatorService } from './calculator.service';

export const CalculatorModule = angular 
    .module('calculator.module', [
        FormCalculatorModule,
        ListCalculatorModule,
        uiRouter
    ])
    .service('CalculatorService', CalculatorService)
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