/**********************************
********* Carti Controller ********
***********************************/
/**
*
* no globals are left behind because of the IIFE (JavaScript Closures)
*/
(function() {
    'use strict';

    function ListaCartiCrestine($scope, ListeService){
        console.log('Top Carti Controller');
        $scope.changeAccessLevel(21);


        $scope.getCarti = ListeService.getCartiCrestine().success(function(data){
            $scope.cartiCrestine = data;
        });


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
        .controller('ListaCartiCrestine', ['$scope', 'ListeService', ListaCartiCrestine]);
})();
