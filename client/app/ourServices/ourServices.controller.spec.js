'use strict';

describe('Component: OurServicesComponent', function () {

  // load the controller's module
  beforeEach(module('startUpApp'));

  var OurServicesComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController) {
    OurServicesComponent = $componentController('ourServices', {});
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
