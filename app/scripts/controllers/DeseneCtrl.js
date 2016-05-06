/**********************************
********* Desene Controller ********
***********************************/
/**
*
* no globals are left behind because of the IIFE (JavaScript Closures)
*/
(function() {
    'use strict';

    function TopDeseneCtrl($scope, $log, $filter, $routeParams, ListeService){
        console.log('Top Desene Controller');

        $scope.currentPage = 1;
        $scope.pageSize = 10;

        $scope.desene = [];

        ListeService.getDesene().success(function(data){
            $scope.desene = data;
            /*for(var i=0;i<data.length;i++){
                $scope.timeStamp = parseInt(data[i]._id.toString().substr(0,8), 16)*1000;
                var date = new Date($scope.timeStamp);
                data[i].data = date;

                $scope.desene.push(data[i]);
                console.log($scope.desene);
            }*/
        });




        $scope.pageChangeHandler = function(num) {
            console.log('change to page ' + num);
        };
    }

    angular
        .module('myAngularApp')
        .controller('TopDeseneCtrl', ['$scope', '$log', '$filter', '$routeParams', 'ListeService', TopDeseneCtrl]);
})();
