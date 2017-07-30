'use strict';

describe('Component: PatientvsmsComponent', function() {
  // load the controller's module
  beforeEach(module('testMdiApp.patientvsms'));

  var PatientvsmsComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($componentController) {
	$httpBackend = _$httpBackend_;
    $httpBackend.expectGET('/api/patientvsms').respond(['HTML5 Boilerplate', 'AngularJS', 'Karma', 'Express']);
    scope = $rootScope.$new();
    state = $state;
    PatientvsmsComponent = $componentController('patientvsms', {
    	$http,
        $scope: scope
    });
  }));

  it('should ...', function() {
    //expect(1).to.equal(1);
	PatientvsmsComponent.$onInit();
	$httpBackend.flush();
	expect(PatientvsmsComponent.listPatientVsm.length).to.equal(4);
  });
});
