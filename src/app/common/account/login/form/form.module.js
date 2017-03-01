import angular from 'angular';

import { LoginFormComponent } from './form.component';

export const LoginFormModule = angular
    .module('login.form.module', [])
    .component('loginForm', LoginFormComponent)
    .name;