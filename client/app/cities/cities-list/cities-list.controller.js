'use strict';
(function(){

class CitiesListComponent {
  constructor(citiesService) {
    this.message = 'Hello';
    this.citiesService = citiesService;
  }

  $onInit(){
    this.citiesService.query().$promise
    .then(response => {
      console.log('CIUDADES',response);
      this.cities = response;
    })
    .catch(err => console.log(err));
  }
}

CitiesListComponent.$inject = ['citiesService'];
angular.module('startUpApp')
  .component('citiesList', {
    templateUrl: 'app/cities/cities-list/cities-list.html',
    controller: CitiesListComponent,
    controllerAs:'vm'
  });

})();
