import angular from 'angular';

import { ComparePasswordDirective } from './compare-password.directive';

export const ComparePasswordModule = angular
  .module('compare.password.module', [])
  .directive('comparePassword', () => {
    'ngInject';

    return new ComparePasswordDirective();
  })
  .name;