'use strict';

describe('Component: DepartamentsListComponent', function () {

  // load the controller's module
  beforeEach(module('startUpApp'));

  var DepartamentsListComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    DepartamentsListComponent = $componentController('DepartamentsListComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
