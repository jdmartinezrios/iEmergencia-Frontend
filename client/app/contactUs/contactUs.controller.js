'use strict';

(function(){

class ContactUsComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('startUpApp')
  .component('contactUs', {
    templateUrl: 'app/contactUs/contactUs.html',
    controller: ContactUsComponent,
    controllerAs: 'contactUsCtrl'
  });

})();
