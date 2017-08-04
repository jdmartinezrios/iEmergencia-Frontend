'use strict';

describe('Component: CountriesListComponent', function () {

  // load the controller's module
  beforeEach(module('startUpApp'));

  var CountriesListComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    CountriesListComponent = $componentController('CountriesListComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
