/********************************
******* Bancuri Service *********
********************************/

(function() {
    'use strict';

    angular
    .module('myAngularApp')
    .factory('SufletMinteService', ['$http', function($http) {

        function getCuvinte() {
            return $http.get('/api/getCuvinte', {cache: true});
        }

        function getAforisme() {
            return $http.get('/api/getAforisme', {cache: true});
        }

        return {
            getCuvinte: getCuvinte,
            getAforisme: getAforisme
        };

    }]);

}());
