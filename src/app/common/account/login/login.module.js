import angular from 'angular';

import { LoginComponent } from './login.component';
import { LoginFormModule } from './form/form.module';

import './login.component.scss';

export const LoginModule = angular
    .module('login.module', [
        LoginFormModule
    ])
    .component('loginComponent', LoginComponent)
    .name;