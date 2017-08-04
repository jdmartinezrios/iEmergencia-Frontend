'use strict';

(function(){

class OurServicesComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('startUpApp')
  .component('ourServices', {
    templateUrl: 'app/ourServices/ourServices.html',
    controller: OurServicesComponent,
    controllerAs: 'ourServicesCtrl'
  });

})();
