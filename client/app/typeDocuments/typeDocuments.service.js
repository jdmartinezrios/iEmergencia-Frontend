'use strict';

function typeDocumentsService($resource,API) {
	// AngularJS will instantiate a singleton by cang "new" on this function
  return $resource(API + '/api/documents_types',{
    id:'@id'
  },{
    update:{
      method:'PUT'
    }
  });
}

angular.module('startUpApp')
  .service('typeDocumentsService', typeDocumentsService);
