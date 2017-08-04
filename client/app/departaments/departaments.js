'use strict';

angular.module('startUpApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('departaments-list', {
        url: '/departaments-list',
        template: '<departaments-list></departaments-list>'
      });
  });
