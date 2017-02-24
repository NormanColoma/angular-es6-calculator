import angular from 'angular';

import { RegisterComponent } from './register.component';
import { ExistsAccountModule } from './exists-account/exists-account.module';

export const RegisterModule = angular
    .module('regiser.module', [
        ExistsAccountModule
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