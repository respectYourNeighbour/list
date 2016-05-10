/**********************************
********* Facts Controller ********
***********************************/
/**
*
* no globals are left behind because of the IIFE (JavaScript Closures)
*/
(function() {
    'use strict';

    function FactsCtrl($scope, $log, $filter, $routeParams, factsService) {
        console.log('Facts Controller');
        $scope.WelcomeMessage = 'Welcome to Facts!';

        //$scope.facts = [];

        $scope.getFacts = factsService.getFacts().success(function(data){
            $scope.facts = data;
            /*for(var i=0;i<data.length;i++){
                $scope.facts.push(data[i]);
            }*/
        });


        //Pagination definition.
        $scope.currentPage = 1;
        $scope.pageSize = 10;

        $scope.pageChangeHandler = function() {
            //console.log('change to page ' + num);
            window.scrollTo(0,0);
        };
    }

    angular
        .module('myAngularApp')
        .controller('FactsCtrl', ['$scope', '$log', '$filter', '$routeParams', 'factsService', FactsCtrl]);

})();
