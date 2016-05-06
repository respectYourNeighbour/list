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

        function getTopCarti() {
            return $http.get('/api/getTopCarti', {cache: true});
        }

        return {
            getDesene: getDesene,
            getTopCarti : getTopCarti
        };

    }]);

}());
