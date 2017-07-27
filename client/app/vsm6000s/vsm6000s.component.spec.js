'use strict';

describe('Component: Vsm6000sComponent', function() {
  // load the controller's module
  beforeEach(module('testMdiApp.vsm6000s'));

  var Vsm6000sComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($componentController) {
    Vsm6000sComponent = $componentController('vsm6000s', {});
  }));

  it('should ...', function() {
    expect(1).to.equal(1);
  });
});
