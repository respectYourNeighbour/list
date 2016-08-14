/**********************************
********* Anunturi Controller *****
***********************************/
/**
*
* no globals are left behind because of the IIFE (JavaScript Closures)
*/
(function() {
    'use strict';

    function AnunturiCtrl($scope, $log, $filter, $routeParams, anunturiService) {
        console.log('Anunturi Controller');
        $scope.WelcomeMessage = 'Welcome to Ghicitori!';

        //$scope.anunturi = [];

        $scope.getAnunturi = anunturiService.getAnunturi().success(function(data){
            $scope.anunturi = data;
            /*for(var i=0;i<data.length;i++){
                $scope.timeStamp = parseInt(data[i]._id.toString().substr(0,8), 16)*1000;
                var date = new Date($scope.timeStamp);
                data[i].data = date;

                $scope.anunturi.push(data[i]);
            }*/
        });


        //Pagination definition.
        $scope.currentPage = 1;
        $scope.pageSize = 10;

        $scope.pageChangeHandler = function(num) {
            console.log('change to page ' + num);
        };
        $scope.status = 'ready';
    }
    angular
        .module('myAngularApp')
        .controller('AnunturiRomanestiCtrl', ['$scope', '$log', '$filter', '$routeParams', 'anunturiService', AnunturiCtrl]);
})();
