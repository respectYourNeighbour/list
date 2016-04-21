/**********************************
********* Bancuri Controller ******
***********************************/
/**
*
* no globals are left behind because of the IIFE (JavaScript Closures)
*/
(function() {
    'use strict';

    function BancuriAnimaleCtrl($scope, $log, $filter, $routeParams, bancuriService){
        console.log('Bancuri Controller');
        $scope.changeAccessLevel(11);

        $('body').css('backgroundColor','#FFFDE4');

        $scope.bancuriDiverse = [];

        bancuriService.getBancuriAnimale().success(function(data){

           /* for(var i=0;i<data.length;i++){
                $scope.timeStamp = parseInt(data[i]._id.toString().substr(0,8), 16)*1000
                date = new Date($scope.timeStamp)
                data[i].data = date;

                if(data[i].category == 'Animale'){
                    $scope.bancuriAnimale.push(data[i]);
                }else if(data[i].category == 'Diverse'){
                    $scope.bancuriDiverse.push(data[i]);
                }
            }*/
             console.log('bancuri animale',data[0].bancuri);

            $scope.bancuriAnimale = data[0].bancuri;
        });

        $scope.addLike = function($event, banc){
            console.log('click add like btn: '+banc._id);
            banc.likes++;
            //i append the service and send the id to the service
            bancuriService.addLike(banc._id).success(function(data) {
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
        .controller('BancuriAnimaleCtrl', ['$scope', '$log', '$filter', '$routeParams', 'bancuriService', BancuriAnimaleCtrl]);
})();
