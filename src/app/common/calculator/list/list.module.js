import angular from 'angular';

import { ListCalculatorComponent } from './list.component';

export const ListCalculatorModule =
    angular
        .module('list.caculator.module', [])
        .component('listCalculator', ListCalculatorComponent)
        .name;
