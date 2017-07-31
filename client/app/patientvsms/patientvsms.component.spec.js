'use strict';

import patientvsms from './patientvsms.component';
import {
  PatientvsmsComponent
} from './patientvsms.component';

describe('Component: PatientvsmsComponent', function() {
  beforeEach(angular.mock.module(patientvsms));
  beforeEach(angular.mock.module('stateMock'));

  var scope;
  var PatientvsmsComponent;
  var state;
  var $httpBackend;

  // Initialize the controller and a mock scope
  beforeEach(inject(function(_$httpBackend_, $http, $componentController, $rootScope, $state) {
	$httpBackend = _$httpBackend_;
    $httpBackend.expectGET('/api/patientvsms')
      .respond(['HTML5 Boilerplate', 'AngularJS', 'Karma', 'Express']);
    scope = $rootScope.$new();
    state = $state;
    PatientvsmsComponent = $componentController('patientvsms', {
      $http,
      $scope: scope
    });
  }));

  it('should attach a list of things to the controller', function() {
	PatientvsmsComponent.$onInit();
	$httpBackend.flush();
	expect(PatientvsmsComponent.listPatientVsm.length)
	  .to.equal(4);
  });
});
