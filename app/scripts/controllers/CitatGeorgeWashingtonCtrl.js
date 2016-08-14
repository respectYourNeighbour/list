/**********************************
***** Gifs Fail Controller ********
***********************************/
/**
*
* no globals are left behind because of the IIFE (JavaScript Closures)
*/
(function() {
    'use strict';

    function GeorgeWashingtonCtrl($scope, $filter, CitateService){
        $scope.changeAccessLevel(42);
        $scope.currentPage = 1;
        $scope.pageSize = 10;
        $scope.autor= 'George Washington';

        $scope.pageChangeHandler = function() {
            //console.log('change to page ' + num);
            window.scrollTo(0,0);
        };

        $scope.getCitate = CitateService.getCitateGeorgeWashington().success(function(data){
            $scope.citate = data;
        });

        $scope.status = 'ready';
    }

    angular
        .module('myAngularApp')
        .controller('GeorgeWashingtonCtrl', ['$scope', '$filter', 'CitateService', GeorgeWashingtonCtrl]);
})();
