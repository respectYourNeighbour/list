/**********************************
********* Arta Controller ********
***********************************/
/**
*
* no globals are left behind because of the IIFE (JavaScript Closures)
*/
(function() {
    'use strict';

    function ArtaHomeCtrl($scope){
        console.log('Arta Home Controller');
        $scope.WelcomeMessage = 'Welcome to Arta Home!';
        $scope.changeAccessLevel(1);

        $scope.status = 'ready';
    }

    angular
        .module('myAngularApp')
        .controller('ArtaHomeCtrl', ['$scope', ArtaHomeCtrl]);
})();
