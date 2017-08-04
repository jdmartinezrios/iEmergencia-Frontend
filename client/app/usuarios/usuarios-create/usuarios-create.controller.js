'use strict';
(function(){

class UsuariosCreateComponent {
  constructor(usuariosService, citiesService, typeDocumentsService, $state, departamentsService) {
    this.usuariosService = usuariosService;
    this.citiesService = citiesService;
    this.typeDocumentsService = typeDocumentsService;
    this.$state = $state;
    this.departamentsService = departamentsService;
    this.mensaje="";
    this.errors = {
      doc:false,
      email:false
    };
  }

  $onInit(){
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

  createUser(){
    this.user.active=1;
    console.log(this.user);

    this.usuariosService.save(this.user).$promise
    .then(response => {
      console.log('CREATE OK',response);
      this.$state.go('usuarios-list');
    })
    .catch(err => {
      console.log('ERROR',err);
      if(err.data == "DOC"){
        this.errors.doc = true;
      }
    });
  }
  getCities(){
    console.log(this.idDepartaments);
    this.citiesService.getCities({idDepartaments:this.idDepartaments}).$promise
    .then(response => {
      console.log('Ciudades', response);
      this.cities = response;
    })
    .catch(err => console.error(err));
  }
}
UsuariosCreateComponent.$inject = ['usuariosService','citiesService','typeDocumentsService','$state','departamentsService'];
angular.module('startUpApp')
  .component('usuariosCreate', {
    templateUrl: 'app/usuarios/usuarios-create/usuarios-create.html',
    controller: UsuariosCreateComponent,
    controllerAs:'vm'
  });

})();
