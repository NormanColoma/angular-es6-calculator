import angular from 'angular';

import { EventEmitterModule } from './event-emitter/event-emitter.module';

export const ComponentModule = angular
    .module('component.module',[
        EventEmitterModule
    ])
    .name;