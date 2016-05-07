/**********************************
***** Gifs Cool Controller ********
***********************************/
/**
*
* no globals are left behind because of the IIFE (JavaScript Closures)
*/
(function() {
    'use strict';

    function GifsCoolCtrl($scope, $filter, GifsService){
        $scope.changeAccessLevel(31);
        $scope.currentPage = 1;
        $scope.pageSize = 5;

        $scope.pageChangeHandler = function() {
            //console.log('change to page ' + num);
        };

        $scope.getCoolGifs = GifsService.getCoolGifs().success(function(data){
            $scope.coolGifs = data;
        });


    }

    angular
        .module('myAngularApp')
        .controller('GifsCoolCtrl', ['$scope', '$filter', 'GifsService', GifsCoolCtrl]);
})();
