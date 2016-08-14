/**********************************
***** Gifs Wow Controller *********
***********************************/
/**
*
* no globals are left behind because of the IIFE (JavaScript Closures)
*/
(function() {
    'use strict';

    function GifsWowCtrl($scope, $filter, GifsService){
        $scope.changeAccessLevel(31);
        //console.log('Gifs wow controller');
        $scope.currentPage = 1;
        $scope.pageSize = 5;
        $scope.gifsCategoryName = 'Wow Gifs';

        $scope.pageChangeHandler = function() {
            //console.log('change to page ' + num);
            window.scrollTo(0,0);
        };

        $scope.getGifs = GifsService.getWowGifs().success(function(data){
            //console.log('data: ', data);
            $scope.gifs = data;
        });

        $scope.status = 'ready';
    }

    angular
        .module('myAngularApp')
        .controller('GifsWowCtrl', ['$scope', '$filter', 'GifsService', GifsWowCtrl]);
})();
