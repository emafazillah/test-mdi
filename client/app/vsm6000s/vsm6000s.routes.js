'use strict';

export default function($routeProvider) {
  'ngInject';
  $routeProvider
    .when('/vsm6000s', {
      template: '<vsm-6000-s></vsm-6000-s>'
    });
}
