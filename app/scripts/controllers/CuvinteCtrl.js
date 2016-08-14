/**********************************
********* Culmi Controller ********
***********************************/
/**
*
* no globals are left behind because of the IIFE (JavaScript Closures)
*/
(function() {
    'use strict';

    function CuvinteCtrl($scope, $log, $filter, $routeParams, SufletMinteService){
        console.log('Cuvinte Controller');
        $scope.WelcomeMessage = 'Welcome to Cuvinte!';

        $scope.getCuvinte = SufletMinteService.getCuvinte().success(function(data){
            $scope.cuvinte = data;
        });


        //Pagination definition.
        $scope.currentPage = 1;
        $scope.pageSize = 20;

        $scope.pageChangeHandler = function() {
            //console.log('change to page ' + num);
            window.scrollTo(0,0);
        };

        $scope.status = 'ready';
    }

    angular
        .module('myAngularApp')
        .controller('CuvinteCtrl', ['$scope', '$log', '$filter', '$routeParams', 'SufletMinteService', CuvinteCtrl]);
})();
