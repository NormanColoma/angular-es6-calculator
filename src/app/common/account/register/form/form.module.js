import angular from 'angular';

import { RegisterFormComponent } from './form.component';

export const RegisterFormModule = angular 
    .module('register.form.module', [])
    .component('registerForm', RegisterFormComponent)
    .name;