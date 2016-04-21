/**********************************
********* Proverbe Controller *****
***********************************/
/**
*
* no globals are left behind because of the IIFE (JavaScript Closures)
*/
(function() {
	'use strict';

	function ProverbeCtrl($scope) {
		console.log('Proverbe Controller');
	    $scope.WelcomeMessage = 'Welcome to Proverbe!';
	    $scope.changeAccessLevel(47);
	}

	angular
		.module('myAngularApp')
		.controller('ProverbeCtrl', ['$scope', ProverbeCtrl]);

})();
