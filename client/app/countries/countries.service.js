'use strict';

function countriesService($resource,API) {
  return $resource(API + '/api/countries/:id',
  {id:'@id'},
  {update:
    {method:'PUT'}
  });
}

angular.module('startUpApp')
  .service('countriesService', countriesService);
