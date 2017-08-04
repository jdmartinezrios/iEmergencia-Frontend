'use strict';

describe('Component: TypeDocumentsListComponent', function () {

  // load the controller's module
  beforeEach(module('startUpApp'));

  var TypeDocumentsListComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController) {
    TypeDocumentsListComponent = $componentController('typeDocuments-list', {});
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
