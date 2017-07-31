'use strict';
import angular from 'angular';
import uiRouter from 'angular-ui-router';
import routes from './patientvsms.routes';

export class PatientvsmsComponent {
	
  listPatientVsm = [];
	
  /*@ngInject*/
  constructor($http) {
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
    controller: PatientvsmsComponent
  })
  .name;
