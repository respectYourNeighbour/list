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
        $scope.gifsCategoryName = 'Fail Gifs';

        $scope.pageChangeHandler = function() {
            //console.log('change to page ' + num);
            window.scrollTo(0,0);
        };

        $scope.getGifs = GifsService.getFailGifs().success(function(data){
            $scope.gifs = data;
        });


    }

    angular
        .module('myAngularApp')
        .controller('GifsFailCtrl', ['$scope', '$filter', 'GifsService', GifsFailCtrl]);
})();
