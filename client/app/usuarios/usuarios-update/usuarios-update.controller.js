'use strict';

(function() {

  class UsuariosUpdateComponent {
    constructor(usuariosService, $state, $stateParams, citiesService, departamentsService, typeDocumentsService) {
      this.usuariosService = usuariosService;
      this.$state = $state;
      this.$stateParams = $stateParams;
      this.citiesService = citiesService;
      this.departamentsService = departamentsService;
      this.typeDocumentsService = typeDocumentsService;
      this.message = 'Hello';
    }

    $onInit() {
      this.usuariosService.get({id: this.$stateParams.idUser}).$promise
        .then(response => {
          console.log(response, 'Take User', response);
          this.user = response;
        })
        .catch(err => {
          console.log(err, 'Error');
        });

        this.citiesService.query().$promise
        .then(response => {
          console.log('CITY OK',response);
          this.city = response;
        })
        .catch(err => {
          console.log('ERROR',err);
        });

      this.typeDocumentsService.query().$promise
        .then(response => {
          console.log('TYPEDOCUMENT OK', response);
          this.typeDocument = response;
        })
        .catch(err => {
          console.log('ERROR', err);
        });

      this.departamentsService.query().$promise
        .then(response => {
          console.log('DEPARTAMENTS', response);
          this.departamentsList = response;
        })

        .catch(err => {
          console.log(err, 'Error');
        });
    }

    updateUser() {
      this.usuariosService.update(({id:this.user.id}), this.user).$promise
        .then(response => {
          console.log('Usuario Actualizado', response);
          this.$state.go('usuarios-list');
        })
        .catch(err => {
          console.log(err, 'Error');
        });
    }
    getCities() {
      console.log(this.idDepartament);
      this.citiesService.getCities({idDepartamento:this.idDepartament}).$promise
        .then(response => {
          console.log('Ciudades', response);
          this.cities = response;
        })
        .catch(err => console.error(err));
    }
  }

 UsuariosUpdateComponent.$inject = ['usuariosService', '$state', '$stateParams', 'citiesService', 'departamentsService', 'typeDocumentsService'];
  angular.module('startUpApp')
    .component('usuariosUpdate', {
      templateUrl: 'app/usuarios/usuarios-update/usuarios-update.html',
      controller: UsuariosUpdateComponent,
      controllerAs: 'vm'
    });

})();
