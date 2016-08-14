/**********************************
***** Gifs Fail Controller ********
***********************************/
/**
*
* no globals are left behind because of the IIFE (JavaScript Closures)
*/
(function() {
    'use strict';

    function DemocritCtrl($scope, $filter, CitateService){
        $scope.changeAccessLevel(42);
        $scope.currentPage = 1;
        $scope.pageSize = 10;
        $scope.autor= 'Democrit';

        $scope.pageChangeHandler = function() {
            //console.log('change to page ' + num);
            window.scrollTo(0,0);
        };

        $scope.getCitate = CitateService.getCitateDemocrit().success(function(data){
            $scope.citate = data;
        });

        $scope.status = 'ready';
    }

    angular
        .module('myAngularApp')
        .controller('DemocritCtrl', ['$scope', '$filter', 'CitateService', DemocritCtrl]);
})();
