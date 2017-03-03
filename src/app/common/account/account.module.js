import angular from 'angular';

import { LoginModule } from './login/login.module';
import { RegisterModule } from './register/register.module';

export const AccountModule = angular
    .module('account.module', [
        LoginModule,
        RegisterModule
    ])
    .config(($stateProvider) => {
        'ngInject';

        $stateProvider
        .state('login', {
            url: '/login',
            template: '<login-component></login-component>'
        })
        .state('register', {
            url: '/register',
            template: '<register-component></register-component>'
        });
    })
    .name;