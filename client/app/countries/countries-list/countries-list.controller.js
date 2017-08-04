'use strict';
(function(){

class CountriesListComponent {
  constructor(countriesService) {
    this.message = 'Hello';
    this.countriesService = countriesService;
  }

  $onInit(){
    this.countriesService.query().$promise
    .then(response => {
      console.log('OK',response);
      this.countries = response;
    })
    .catch(err => console.log(err));
  }
}

CountriesListComponent.$inject = ['countriesService'];
angular.module('startUpApp')
  .component('countriesList', {
    templateUrl: 'app/countries/countries-list/countries-list.html',
    controller: CountriesListComponent,
    controllerAs:'vm'
  });

})();
