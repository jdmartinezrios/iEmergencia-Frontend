'use strict';
(function(){

class DepartamentsListComponent {
  constructor(departamentsService) {
    this.message = 'Hello';
    this.departamentsService = departamentsService;
  }

  $onInit(){
    this.departamentsService.query().$promise
    .then(response => {
      console.log('OK',response);
      this.departaments = response;
    })
    .catch(err => console.log(err));
  }
}

DepartamentsListComponent.$inject =['departamentsService'];
angular.module('startUpApp')
  .component('departamentsList', {
    templateUrl: 'app/departaments/departaments-list/departaments-list.html',
    controller: DepartamentsListComponent,
    controllerAs:'vm'
  });

})();
