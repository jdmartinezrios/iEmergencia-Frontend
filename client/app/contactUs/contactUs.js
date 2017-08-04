'use strict';

angular.module('startUpApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('contactUs', {
        url: '/contactUs',
        template: '<contact-us></contact-us>'
      });
  });
