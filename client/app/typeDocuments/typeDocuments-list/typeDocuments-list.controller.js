'use strict';

(function(){

class TypeDocumentsListComponent {
  constructor(typeDocumentsService) {
    this.typeDocumentsService = typeDocumentsService;
  }

  $onInit(){
    this.typeDocumentsService.query().$promise
    .then(response => {
      console.log('TYPEDOCUMENT OK',response);
      this.typeDocument = response;
    })
    .catch(err => {
      console.log('ERROR',err);
    });
  }
}

angular.module('startUpApp')
  .component('typeDocumentsList', {
    templateUrl: 'app/typeDocuments/typeDocuments-list/typeDocuments-list.html',
    controller: TypeDocumentsListComponent,
    controllerAs: 'typeDocumentsListCtrl'
  });

})();
