'use strict';

describe('Component: ContactUsComponent', function () {

  // load the controller's module
  beforeEach(module('startUpApp'));

  var ContactUsComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController) {
    ContactUsComponent = $componentController('contactUs', {});
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
