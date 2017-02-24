import angular from 'angular';

import { RegisterComponent } from './register.component';

export const RegisterModule = angular
    .module('regiser.module', [])
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