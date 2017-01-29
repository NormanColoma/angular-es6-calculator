import angular from 'angular';

import { FormCalculatorComponent } from './form.component';

import './form.component.scss';

export const FormCalculatorModule =
    angular.
        module('form.calculator.module', [])
        .component('formCalculator', FormCalculatorComponent)
        .name;

