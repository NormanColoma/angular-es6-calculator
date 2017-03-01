import angular from 'angular';

import { LoginComponent } from './login.component';

import './login.component.scss';

export const LoginModule = angular
    .module('login.module', [])
    .component('loginComponent', LoginComponent)
    .name;