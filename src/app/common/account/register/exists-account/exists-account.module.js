import angular from 'angular';

import { ExistsAccountDirective } from './exists-account.directive';
import { AuthService } from '../../../auth/auth.service';

export const ExistsAccountModule = angular
  .module('device.existence.module', [])
  .service('AuthService', AuthService)
  .directive('existsAccount', (AuthService) => {
    'ngInject';

    return new ExistsAccountDirective(AuthService);
  })
  .name;