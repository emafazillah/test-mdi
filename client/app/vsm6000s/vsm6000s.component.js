'use strict';
const angular = require('angular');
const ngRoute = require('angular-route');


import routes from './vsm6000s.routes';

export class Vsm6000sComponent {
  /*@ngInject*/
  constructor() {
    this.message = 'Hello';
  }
}

export default angular.module('testMdiApp.vsm6000s', [ngRoute])
  .config(routes)
  .component('vsm6000s', {
    template: require('./vsm6000s.html'),
    controller: Vsm6000sComponent,
    controllerAs: 'vsm6000sCtrl'
  })
  .name;
