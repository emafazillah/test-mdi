'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './patientvsms.routes';

export class PatientvsmsComponent {
  /*@ngInject*/
  constructor() {
    this.message = 'Hello';
  }
}

export default angular.module('testMdiApp.patientvsms', [uiRouter])
  .config(routes)
  .component('patientvsms', {
    template: require('./patientvsms.html'),
    controller: PatientvsmsComponent,
    controllerAs: 'patientvsmsCtrl'
  })
  .name;
