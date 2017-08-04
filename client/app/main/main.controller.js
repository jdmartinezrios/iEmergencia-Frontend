'use strict';

(function() {

  class MainController {
    constructor() {
    }

    $onInit() {
      $(function(){
        $('.Phone-wrapper div:gt(0)').hide();
          setInterval(function(){
        $('.Phone-wrapper div:first-child').fadeOut(0)
        .next('div').fadeIn(1000)
        .end().appendTo('.Phone-wrapper');
        },5000);
      });

      $(function(){
        $('.Tslider div:gt(0)').hide();
          setInterval(function(){
        $('.Tslider div:first-child').fadeOut(0)
        .next('div').fadeIn(1000)
        .end().appendTo('.Tslider');
        },5000);
      });

  }
}

  angular.module('startUpApp')
    .component('main', {
      templateUrl: 'app/main/main.html',
      controller: MainController,
      controllerAs:'vm'
    });
})();
