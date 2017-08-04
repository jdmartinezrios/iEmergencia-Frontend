'use strict';

(function(){

class AboutUsComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('startUpApp')
  .component('aboutUs', {
    templateUrl: 'app/aboutUs/aboutUs.html',
    controller: AboutUsComponent,
    controllerAs: 'aboutUsCtrl'
  });

})();
