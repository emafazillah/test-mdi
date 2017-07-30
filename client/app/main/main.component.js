import angular from 'angular';
import uiRouter from 'angular-ui-router';
import routing from './main.routes';

export class MainController {

  awesomeThings = [];
  newThing = '';

  /*@ngInject*/
  constructor($http) {
    this.$http = $http;
  }

  $onInit() {
    this.$http.get('/api/patientvsms')
      .then(response => {
        this.awesomeThings = response.data;
      });
  }

  addThing() {
    if(this.newThing) {
      this.$http.post('/api/patientvsms', {
        name: this.newThing
      });
      this.newThing = '';
    }
  }

  deleteThing(thing) {
    this.$http.delete(`/api/patientvsms/${patientvsm._id}`);
  }
}

export default angular.module('testMdiApp.main', [uiRouter])
  .config(routing)
  .component('main', {
    template: require('./main.html'),
    controller: MainController
  })
  .name;
