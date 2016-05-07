/********************************
******* Gifs Service ************
*********************************/

(function() {
    'use strict';

    angular
    .module('myAngularApp')
    .factory('GifsService', ['$http', function($http) {

        function getCoolGifs() {
            return $http.get('/api/getCoolGifs', {cache: true});
        }

        function getFailGifs() {
            return $http.get('/api/getFailGifs', {cache: true});
        }

        function getFunnyGifs() {
            return $http.get('/api/getFunnyGifs', {cache: true});
        }

        function getInterestingGifs() {
            return $http.get('/api/getInterestingGifs', {cache: true});
        }

        function getWowGifs() {
            return $http.get('/api/getWowGifs', {cache: true});
        }

        function getReactionGifs() {
            return $http.get('/api/getReactionGifs', {cache: true});
        }

        return {
            getCoolGifs: getCoolGifs,
            getFailGifs: getFailGifs,
            getFunnyGifs: getFunnyGifs,
            getInterestingGifs: getInterestingGifs,
            getWowGifs: getWowGifs,
            getReactionGifs: getReactionGifs
        };

    }]);

}());
