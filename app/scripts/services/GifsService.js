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

        return {
            getCoolGifs: getCoolGifs,
            getFailGifs: getFailGifs
        };

    }]);

}());
