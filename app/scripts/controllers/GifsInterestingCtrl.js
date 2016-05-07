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

        $scope.pageChangeHandler = function() {
            //console.log('change to page ' + num);
        };

        $scope.getInterestingGifs = GifsService.getInterestingGifs().success(function(data){
            console.log('data: ', data);
            $scope.interestingGifs = data;
        });


    }

    angular
        .module('myAngularApp')
        .controller('GifsInterestingCtrl', ['$scope', '$filter', 'GifsService', GifsInterestingCtrl]);
})();
