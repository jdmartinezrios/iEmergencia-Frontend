'use strict';

function authService($auth,$state) {
	// AngularJS will instantiate a singleton by calling "new" on this function
	var auth = {
 		login:login,
 		logout:logout,
 		isAdmin:isAdmin
 	};

 	function login(user,collback){
 		$auth.login(user)
 		.then(response => {
 			console.log('Login ok',response);
 			$state.go('usuarios-list');
 		})
 		.catch(err =>{
 			console.log('Error de login',err);
 			$state.go('login');
 		});
 	}

 	function logout(){}
 	function isAdmin(){}

  return auth;

}

authService.$inject  = ['$auth','$state'];
angular.module('startUpApp')
  .factory('authService', authService);
