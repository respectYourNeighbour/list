/********************************
******* Desene Service *********
********************************/

(function() {
    'use strict';

    angular
    .module('myAngularApp')
    .factory('ListeService', ['$http', function($http) {

        function getDesene() {
            return $http.get('/api/getDesene', {cache: true});
        }

        function getCartiCrestine() {
            return $http.get('/api/getCartiCrestine', {cache: true});
        }

        function getCartiInteresante() {
            return $http.get('/api/getCartiInteresante', {cache: true});
        }

        return {
            getDesene: getDesene,
            getCartiCrestine: getCartiCrestine,
            getCartiInteresante: getCartiInteresante
        };

    }]);

}());
