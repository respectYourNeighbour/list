/**********************************
********* Carti Controller ********
***********************************/
/**
*
* no globals are left behind because of the IIFE (JavaScript Closures)
*/
(function() {
    'use strict';

    function ListaCartiInteresante($scope, ListeService){
        console.log('Top Carti Controller');
        $scope.changeAccessLevel(21);


        $scope.getCarti = ListeService.getCartiInteresante().success(function(data){
            $scope.cartiInteresante = data;
        });


        //Pagination definition.
        $scope.currentPage = 1;
        $scope.pageSize = 5;

        $scope.pageChangeHandler = function(num) {
            console.log('change to page ' + num);
        };
    }

    angular
        .module('myAngularApp')
        .controller('ListaCartiInteresante', ['$scope', 'ListeService', ListaCartiInteresante]);
})();
