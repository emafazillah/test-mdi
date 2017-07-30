'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './patientvsms.routes';

export class PatientvsmsComponent {
  
  listPatientVsm = [];
  newPatientVsm = "";
  
  /*@ngInject*/
  constructor() {
	  this.$http = $http;
  }
  
  $onInit() {
    this.$http.get('/api/patientvsms')
      .then(response => {
        this.listPatientVsm = response.data;
      });
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
