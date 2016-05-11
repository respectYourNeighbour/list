/****************************************
***** Abraham Lincoln Controller ********
*****************************************/
/**
*
* no globals are left behind because of the IIFE (JavaScript Closures)
*/
(function() {
    'use strict';

    function AforismeCtrl($scope, $filter, SufletMinteService){
        console.log('Aforisme Controller');
        $scope.WelcomeMessage = 'Welcome to Aforisme!';
        //$scope.changeAccessLevel(41);

        $scope.currentPage = 1;
        $scope.pageSize = 10;

        $scope.pageChangeHandler = function() {
            //console.log('change to page ' + num);
            window.scrollTo(0,0);
        };

        $scope.getAforisme = SufletMinteService.getAforisme().success(function(data){
            $scope.aforisme = data;
        });


    }

    angular
        .module('myAngularApp')
        .controller('AforismeCtrl', ['$scope', '$filter', 'SufletMinteService', AforismeCtrl]);
})();
