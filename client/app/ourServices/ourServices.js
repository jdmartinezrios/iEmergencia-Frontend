'use strict';

angular.module('startUpApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('ourServices', {
        url: '/ourServices',
        template: '<our-services></our-services>'
      });
  });
