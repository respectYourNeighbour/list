/**********************************
***** Gifs Reaction Controller ****
***********************************/
/**
*
* no globals are left behind because of the IIFE (JavaScript Closures)
*/
(function() {
    'use strict';

    function GifsReactionCtrl($scope, $filter, GifsService){
        $scope.changeAccessLevel(31);
        //console.log('Gifs reaction controller');
        $scope.currentPage = 1;
        $scope.pageSize = 5;

        $scope.pageChangeHandler = function() {
            //console.log('change to page ' + num);
            window.scrollTo(0,0);
        };

        $scope.getReactionGifs = GifsService.getReactionGifs().success(function(data){
            //console.log('data: ', data);
            $scope.reactionGifs = data;
        });


    }

    angular
        .module('myAngularApp')
        .controller('GifsReactionCtrl', ['$scope', '$filter', 'GifsService', GifsReactionCtrl]);
})();
