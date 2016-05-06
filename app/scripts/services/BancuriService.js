/********************************
******* Bancuri Service *********
********************************/

(function() {
    'use strict';

    angular
    .module('myAngularApp')
    .factory('BancuriService', ['$http', function($http) {

        function getAllBancuriAnimale() {
            return $http.get('/api/getBancuriAnimale', {cache: true});
        }

        function getAllBancuriDiverse() {
            return $http.get('/api/getBancuriDiverse', {cache: true});
        }

        function addLike(id) {
            console.log('enters add like service');
            return $http.put('/api/addLike', {_id: id}).success(function(data) {
                console.log('what like'+data);
            });
        }

        return {
            getAllBancuriAnimale: getAllBancuriAnimale,
            getAllBancuriDiverse: getAllBancuriDiverse,
            addLike: addLike
        };

    }]);

}());
