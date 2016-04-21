/**********************************
********* Ghicitori Controller ****
***********************************/
/**
*
* no globals are left behind because of the IIFE (JavaScript Closures)
*/
(function() {
    'use strict';

    function GhicitoriCtrl($scope, $log, $filter, $routeParams, ghicitoriService) {
        console.log('Ghicitori Controller');
        $scope.WelcomeMessage = 'Welcome to Ghicitori!';

        $scope.ghicitori = [];

        ghicitoriService.getGhicitori().success(function(data){

            for(var i=0;i<data.length;i++){
                $scope.timeStamp = parseInt(data[i]._id.toString().substr(0,8), 16)*1000;
                var date = new Date($scope.timeStamp);
                data[i].data = date;

                $scope.ghicitori.push(data[i]);
            }
        });


        //Pagination definition.
        $scope.currentPage = 1;
        $scope.pageSize = 5;

        $scope.pageChangeHandler = function(num) {
            console.log('change to page ' + num);
        };
    }

    angular
        .module('myAngularApp')
        .controller('GhicitoriCtrl', ['$scope', '$log', '$filter', '$routeParams', 'ghicitoriService', GhicitoriCtrl]);
})();
