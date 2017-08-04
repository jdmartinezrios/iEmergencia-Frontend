'use strict';

angular.module('startUpApp')
  .directive('slideshow', function() {
    return {
      templateUrl: 'components/slideshow/slideshow.html',
      restrict: 'E',
      link: function(scope, element) {
        element.addClass('slideshow');
      }
    };
  });
