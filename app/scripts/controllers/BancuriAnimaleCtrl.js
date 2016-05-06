/**********************************
********* Bancuri Controller ******
***********************************/
/**
*
* no globals are left behind because of the IIFE (JavaScript Closures)
*/
(function() {
    'use strict';

    function BancuriAnimaleCtrl($scope, $log, $filter, $routeParams, BancuriService){
        console.log('Bancuri Controller');
        $scope.changeAccessLevel(11);

        $scope.bancuriAnimalePromise = BancuriService.getAllBancuriAnimale().success(function(data){
            console.log('bancuri animale',data);
            $scope.bancuriAnimale = data;
        });

        $scope.addLike = function($event, banc){
            console.log('click add like btn: '+banc._id);
            banc.likes++;

            BancuriService.addLike(banc._id).success(function(data) {
                console.log('this is data'+data);
            });
        };

        //Pagination definition.
        $scope.currentPage = 1;
        $scope.pageSize = 5;
        $scope.pagination = {
            current: 1
        };

        $scope.pageChangeHandler = function(num) {
            console.log('change to page ' + num);
        };
    }

    angular
        .module('myAngularApp')
        .controller('BancuriAnimaleCtrl', ['$scope', '$log', '$filter', '$routeParams', 'BancuriService', BancuriAnimaleCtrl]);
})();
