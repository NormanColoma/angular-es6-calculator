import angular from 'angular';

import { AppComponent } from './app.component';
import { CommonModule } from './common/common.module';
import { ComponentModule } from './component/component.module';

import './app.component.scss';


export const AppModule = angular
  .module('app.module', [
      CommonModule,
      ComponentModule
  ])
  .component('app', AppComponent)
  .config(($urlRouterProvider, $compileProvider) => {
    'ngInject';
  })
  .run(() => {
  })
  .name;