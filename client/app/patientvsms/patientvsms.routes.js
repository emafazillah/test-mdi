'use strict';

export default function($stateProvider) {
  'ngInject';
  $stateProvider
    .state('patientvsms', {
      url: '/patientvsms',
      template: '<patientvsms></patientvsms>'
    });
}
