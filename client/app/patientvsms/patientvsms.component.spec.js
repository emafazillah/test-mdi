'use strict';

describe('Component: PatientvsmsComponent', function() {
  // load the controller's module
  beforeEach(module('testMdiApp.patientvsms'));

  var PatientvsmsComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($componentController) {
    PatientvsmsComponent = $componentController('patientvsms', {});
  }));

  it('should ...', function() {
    expect(1).to.equal(1);
  });
});
