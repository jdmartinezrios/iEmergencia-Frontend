'use strict';

class NavbarController {
  //start-non-standard
  menu = [{
    'title': 'Inicio',
    'state': 'main',
  },{
    'title': 'Quienes Somos',
    'state': 'aboutUs',
  },{
    'title': 'Nuestros Servicios',
    'state': 'ourServices',
  },{
    'title': 'Contáctenos',
    'state': 'contactUs',
  }];

  isCollapsed = true;
  //end-non-standard


}

angular.module('startUpApp')
  .controller('NavbarController', NavbarController);
