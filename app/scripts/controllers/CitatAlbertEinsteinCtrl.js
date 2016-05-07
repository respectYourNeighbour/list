/****************************************
***** Albert Einstein Controller ********
*****************************************/
/**
*
* no globals are left behind because of the IIFE (JavaScript Closures)
*/
(function() {
    'use strict';

    function AlbertEinsteinCtrl($scope, $filter, CitateService){
        $scope.changeAccessLevel(42);
        $scope.currentPage = 1;
        $scope.pageSize = 10;

        $scope.pageChangeHandler = function() {
            //console.log('change to page ' + num);
        };

        $scope.getCitate = CitateService.getCitateAlbertEinstein().success(function(data){
            $scope.citate = data;
        });


    }

    angular
        .module('myAngularApp')
        .controller('AlbertEinsteinCtrl', ['$scope', '$filter', 'CitateService', AlbertEinsteinCtrl]);
})();
