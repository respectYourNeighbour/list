/**********************************
***** Gifs Cool Controller ********
***********************************/
/**
*
* no globals are left behind because of the IIFE (JavaScript Closures)
*/
(function() {
    'use strict';

    function GifsFunnyCtrl($scope, $filter, GifsService){
        $scope.changeAccessLevel(31);
        $scope.currentPage = 1;
        $scope.pageSize = 5;
        $scope.gifsCategoryName = 'Funny Gifs';

        $scope.pageChangeHandler = function() {
            //console.log('change to page ' + num);
            window.scrollTo(0,0);
        };

        $scope.getGifs = GifsService.getFunnyGifs().success(function(data){
            $scope.gifs = data;
        });

        $scope.status = 'ready';
    }

    angular
        .module('myAngularApp')
        .controller('GifsFunnyCtrl', ['$scope', '$filter', 'GifsService', GifsFunnyCtrl]);
})();
