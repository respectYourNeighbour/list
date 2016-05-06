/**********************************
***** Gifs Fail Controller ********
***********************************/
/**
*
* no globals are left behind because of the IIFE (JavaScript Closures)
*/
(function() {
    'use strict';

    function GifsFailCtrl($scope, $filter, GifsService){
        console.log('Gifs Fail Controller');
        $scope.changeAccessLevel(31);
        $scope.currentPage = 1;
        $scope.pageSize = 5;

        $scope.pageChangeHandler = function() {
            //console.log('change to page ' + num);
        };

        $scope.getFailGifs = GifsService.getFailGifs().success(function(data){
            console.log('cool gifs: ', data);
            $scope.failGifs = data;
        });


    }

    angular
        .module('myAngularApp')
        .controller('GifsFailCtrl', ['$scope', '$filter', 'GifsService', GifsFailCtrl]);
})();
