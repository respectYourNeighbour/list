/**********************************
********* Ghicitori Controller ****
***********************************/
/**
*
* no globals are left behind because of the IIFE (JavaScript Closures)
*/
(function() {
    'use strict';

    function GhicitoriCtrl($scope, ghicitoriService) {
        //console.log('--Ghicitori Controller');
        $scope.WelcomeMessage = 'Welcome to Ghicitori!';
        $scope.answer = false;

        //$scope.ghicitori = [];

        $scope.showAnswer = function() {
            //console.log('click answer');
            $scope.answer = !$scope.answer;
        };

        $scope.getGhicitori = ghicitoriService.getGhicitori().success(function(data){
            $scope.ghicitori = data;
            /*for(var i=0;i<data.length;i++){
                $scope.timeStamp = parseInt(data[i]._id.toString().substr(0,8), 16)*1000;
                var date = new Date($scope.timeStamp);
                data[i].data = date;

                $scope.ghicitori.push(data[i]);
            }*/
        });




        //Pagination definition.
        $scope.currentPage = 1;
        $scope.pageSize = 5;

        $scope.pageChangeHandler = function() {
            //console.log('change to page ' + num);
            window.scrollTo(0,0);
        };
    }

    angular
        .module('myAngularApp')
        .controller('GhicitoriCtrl', ['$scope', 'ghicitoriService', GhicitoriCtrl]);
})();
