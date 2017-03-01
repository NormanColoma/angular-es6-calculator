import angular from 'angular';

import { RegisterComponent } from './register.component';
import { ExistsAccountModule } from './exists-account/exists-account.module';
import { ComparePasswordModule } from './compare-password/compare-password.module';
import { RegisterFormModule } from './form/form.module';

export const RegisterModule = angular
    .module('regiser.module', [
        ExistsAccountModule,
        ComparePasswordModule,
        RegisterFormModule
    ])
    .component('registerComponent', RegisterComponent)
    .name;