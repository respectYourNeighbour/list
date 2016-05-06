/**********************************
********* Desene Controller ********
***********************************/
/**
*
* no globals are left behind because of the IIFE (JavaScript Closures)
*/
(function() {
    'use strict';

    function CartiCtrl($scope, ListeService){
        console.log('Top Desene Controller');
        $scope.WelcomeMessage = 'Welcome to Top Carti!';
        $scope.changeAccessLevel(21);


        $('body').css('backgroundColor','#FFFDE4');

        $scope.cartiCrestine = [];
        $scope.cartiInteresante = [];

        ListeService.getTopCarti().success(function(data){

            for(var i=0;i<data.length;i++){
                $scope.timeStamp = parseInt(data[i]._id.toString().substr(0,8), 16)*1000;
                var date = new Date($scope.timeStamp);
                data[i].data = date;

                if(data[i].category === 'crestine'){
                    $scope.cartiCrestine.push(data[i]);
                }else if(data[i].category === 'interesante'){
                    $scope.cartiInteresante.push(data[i]);
                }
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
        .controller('CartiCtrl', ['$scope', 'ListeService', CartiCtrl]);
})();
