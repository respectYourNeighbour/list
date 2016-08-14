/**********************************
***** Gifs Fail Controller ********
***********************************/
/**
*
* no globals are left behind because of the IIFE (JavaScript Closures)
*/
(function() {
    'use strict';

    function WinstonChurchillCtrl($scope, $filter, CitateService){
        $scope.changeAccessLevel(42);
        $scope.currentPage = 1;
        $scope.pageSize = 10;
        $scope.autor= 'Winston Churchill';

        $scope.pageChangeHandler = function() {
            //console.log('change to page ' + num);
            window.scrollTo(0,0);
        };

        $scope.getCitate = CitateService.getCitateWinstonChurchill().success(function(data){
            $scope.citate = data;
        });

        $scope.status = 'ready';
    }

    angular
        .module('myAngularApp')
        .controller('WinstonChurchillCtrl', ['$scope', '$filter', 'CitateService', WinstonChurchillCtrl]);
})();
