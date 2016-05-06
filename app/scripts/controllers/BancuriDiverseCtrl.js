/**********************************
********* Bancuri Controller ******
***********************************/
/**
*
* no globals are left behind because of the IIFE (JavaScript Closures)
*/
(function() {
    'use strict';

    function BancuriDiverseCtrl($scope, $log, $filter, $routeParams, BancuriService){
        console.log('Bancuri Controller');
        $scope.changeAccessLevel(11);

        $('body').css('backgroundColor','#FFFDE4');

        $scope.bancuriDiverse = [];

        $scope.bancuriDiversePromise = BancuriService.getAllBancuriDiverse().success(function(data){
            console.log('bancuri animale',data[0].bancuri);
            $scope.bancuriDiverse = data;
        });

        $scope.addLike = function($event, banc){
            console.log('click add like btn: '+banc._id);
            banc.likes++;
            //i append the service and send the id to the service
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
        .controller('BancuriDiverseCtrl', ['$scope', '$log', '$filter', '$routeParams', 'BancuriService', BancuriDiverseCtrl]);
})();
