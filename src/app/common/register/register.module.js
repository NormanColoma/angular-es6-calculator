import angular from 'angular';

import { RegisterComponent } from './register.component';
import { ExistsAccountModule } from './exists-account/exists-account.module';
import { ComparePasswordModule } from './compare-password/compare-password.module';

export const RegisterModule = angular
    .module('regiser.module', [
        ExistsAccountModule,
        ComparePasswordModule
    ])
    .component('registerComponent', RegisterComponent)
    .config(($stateProvider) => {
        'ngInject'; 

        $stateProvider
            .state('register', {
                 url: '/register',
                 template: '<register-component></register-component>'
            })
    })
    .name;