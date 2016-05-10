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
        $scope.changeAccessLevel(31);
        $scope.currentPage = 1;
        $scope.pageSize = 5;

        $scope.pageChangeHandler = function() {
            //console.log('change to page ' + num);
            window.scrollTo(0,0);
        };

        $scope.getFailGifs = GifsService.getFailGifs().success(function(data){
            $scope.failGifs = data;
        });


    }

    angular
        .module('myAngularApp')
        .controller('GifsFailCtrl', ['$scope', '$filter', 'GifsService', GifsFailCtrl]);
})();
