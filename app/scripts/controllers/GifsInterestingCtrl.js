/**********************************
***** Gifs Cool Controller ********
***********************************/
/**
*
* no globals are left behind because of the IIFE (JavaScript Closures)
*/
(function() {
    'use strict';

    function GifsInterestingCtrl($scope, $filter, GifsService){
        $scope.changeAccessLevel(31);
        console.log('Interesting gifs controller');
        $scope.currentPage = 1;
        $scope.pageSize = 5;
        $scope.gifsCategoryName = 'Interesting Gifs';

        $scope.pageChangeHandler = function() {
            //console.log('change to page ' + num);
            window.scrollTo(0,0);
        };

        $scope.getGifs = GifsService.getInterestingGifs().success(function(data){
            console.log('data: ', data);
            $scope.gifs = data;
        });

        $scope.status = 'ready';
    }

    angular
        .module('myAngularApp')
        .controller('GifsInterestingCtrl', ['$scope', '$filter', 'GifsService', GifsInterestingCtrl]);
})();
