/**********************************
********* Carti Controller ********
***********************************/
/**
*
* no globals are left behind because of the IIFE (JavaScript Closures)
*/
(function() {
    'use strict';

    function CartiCtrl($scope){
        console.log('Top Carti Controller');
        $scope.WelcomeMessage = 'Welcome to Top Carti!';
        $scope.changeAccessLevel(21);


        //Pagination definition.
        $scope.currentPage = 1;
        $scope.pageSize = 5;

        $scope.pageChangeHandler = function(num) {
            console.log('change to page ' + num);
        };

        $scope.status = 'ready';
    }

    angular
        .module('myAngularApp')
        .controller('CartiCtrl', ['$scope', CartiCtrl]);
})();
