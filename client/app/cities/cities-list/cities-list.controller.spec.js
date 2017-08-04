'use strict';

describe('Component: CitiesListComponent', function () {

  // load the controller's module
  beforeEach(module('startUpApp'));

  var CitiesListComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    CitiesListComponent = $componentController('CitiesListComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
