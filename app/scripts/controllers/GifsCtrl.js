/**********************************
********* Gifs Controller *********
***********************************/
/**
*
* no globals are left behind because of the IIFE (JavaScript Closures)
*/
(function() {
    'use strict';

    function GifsCtrl($scope, $log, $filter, $routeParams, gifsService) {

        console.log('Gifs Controller');
        $scope.WelcomeMessage = 'Welcome to Gifs!';
        $scope.changeAccessLevel(31);

        $scope.failGifs = [];
        $scope.funnyGifs = [];
        $scope.interestingGifs = [];
        $scope.reactionGifs = [];
        $scope.wowGifs = [];

        gifsService.getGifs().success(function(data){
            for(var i=0;i<data.length;i++){

                if(data[i].category === 'funny'){
                    $scope.funnyGifs.push(data[i]);
                }
                else if(data[i].category === 'fail'){
                    $scope.failGifs.push(data[i]);
                }else if(data[i].category === 'interesting'){
                    $scope.interestingGifs.push(data[i]);
                }else if(data[i].category === 'reaction'){
                    $scope.reactionGifs.push(data[i]);
                }
                else if(data[i].category === 'wow'){
                    $scope.wowGifs.push(data[i]);
                }
            }

            console.log($scope.wowGifs);
        });

        //Pagination definition.
        $scope.currentPage = 1;
        $scope.pageSize = 5;

        $scope.pageChangeHandler = function(num) {
            console.log('change to page ' + num);
           // $('.gifplayer').gifplayer();
        };

        $scope.status = 'ready';
    }

    angular
        .module('myAngularApp')
        .controller('GifsCtrl', ['$scope', '$log', '$filter', '$routeParams', 'gifsService', GifsCtrl]);
})();
