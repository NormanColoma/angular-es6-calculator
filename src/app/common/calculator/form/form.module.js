import { FormCalculatorComponent } from './form.component';

export const FormCalculatorModule =
    angular.
        module('form.calculator.module', [])
        .component('formCalculator', FormCalculatorComponent)
        .name;

