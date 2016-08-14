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
        $scope.whatBancuri = 'Diverse';

        $('body').css('backgroundColor','#FFFDE4');

        $scope.bancuriDiverse = [];

        $scope.getBancuri = BancuriService.getAllBancuriDiverse().success(function(data){
            console.log('bancuri animale',data);
            $scope.bancuri = data;
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

        $scope.pageChangeHandler = function() {
            //console.log('change to page ' + num);
            window.scrollTo(0,0);
        };

        $scope.status = 'ready';
    }

    angular
        .module('myAngularApp')
        .controller('BancuriDiverseCtrl', ['$scope', '$log', '$filter', '$routeParams', 'BancuriService', BancuriDiverseCtrl]);
})();
