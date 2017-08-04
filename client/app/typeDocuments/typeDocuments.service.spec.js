'use strict';

describe('Service: typeDocuments', function () {

  // load the service's module
  beforeEach(module('startUpApp'));

  // instantiate service
  var typeDocuments;
  beforeEach(inject(function (_typeDocuments_) {
    typeDocuments = _typeDocuments_;
  }));

  it('should do something', function () {
    expect(!!typeDocuments).to.be.true;
  });

});
