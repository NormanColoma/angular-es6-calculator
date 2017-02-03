import angular from 'angular';

import { LoginComponent } from './login.component';

export const LoginModule = angular
    .module('login.module', [])
    .component('loginComponent', LoginComponent)
    .config(($stateProvider) => {
        'ngInject'; 

        $stateProvider
            .state('login', {
                 url: '/login',
                 template: '<login-component></login-component>'
            })
    })
    .name;