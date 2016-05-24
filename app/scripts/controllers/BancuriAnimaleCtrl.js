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
        $scope.whatBancuri = "Animale";

        $scope.getBancuri = BancuriService.getAllBancuriAnimale().success(function(data){
            console.log('bancuri animale',data);
            $scope.bancuri = data;
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

        $scope.pageChangeHandler = function() {
            //console.log('change to page ' + num);
            window.scrollTo(0,0);
        };
    }

    angular
        .module('myAngularApp')
        .controller('BancuriAnimaleCtrl', ['$scope', '$log', '$filter', '$routeParams', 'BancuriService', BancuriAnimaleCtrl]);
})();
