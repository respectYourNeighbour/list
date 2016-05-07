angular.module('appWrapService', []).factory('appWrapService', ['$http', function($http) {
    'use strict';
    // each function returns a promise object
    return {
        // call to get all entries
        get : function() {
            return $http.get('/api/getEntries', {cache: true});
        },

        /*getMenu : function() {
            return $http.get('/api/getMenu', {cache: true});
        },*/

        getMenu : function() {
            return $http.get('../../resources/menu.json', {cache: true});
        },

        /*$http.get('phones/phones.json').success(function(data) {
            $scope.phones = data;
        });*/

        // call to POST and create a new entry
        create : function(newEntry) {
            return $http.post('/api/PostNewEntry', newEntry).success(function(data){
                console.log('this is the new entry that was inserted in DB and now comes back from the API in the Service: ', data[0]);
                return data[0];
            });
        },

        // call to DELETE a entry
        del : function(id) {
            return $http.put('/api/deletePost', {_id: id}).success(function(data) {
                console.log('successfuly deleted: '+data);
            });
        },

        // call to EDIT by ID a entry
        /*update : function(obj) {
            return $http.put('/api/editPost', {obj}).success(function(data) {
                console.log('successfuly editted: '+data);
            });
        }*/

    };

}]);


angular.module('culmiService', []).factory('culmiService', ['$http', function($http) {
    'use strict';
    // each function returns a promise object
    return {
        // call to get all entries
        getCulmi : function() {
            return $http.get('/api/getCulmi', {cache: true});
        }
    };

}]);

angular.module('ghicitoriService', []).factory('ghicitoriService', ['$http', function($http) {
    'use strict';
    // each function returns a promise object
    return {
        // call to get all entries
        getGhicitori : function() {
            return $http.get('/api/getGhicitori', {cache: true});
        }
    };

}]);

angular.module('anunturiService', []).factory('anunturiService', ['$http', function($http) {
    'use strict';
    // each function returns a promise object
    return {
        // call to get all entries
        getAnunturi : function() {
            return $http.get('/api/getAnunturi', {cache: true});
        }
    };

}]);


angular.module('musicService', []).factory('musicService', ['$http', function($http) {
    'use strict';
    // each function returns a promise object
    return {
        // call to get all entries
        getMusic : function() {
            return $http.get('/api/getMusic', {cache: true});
        }
    };

}]);

angular.module('factsService', []).factory('factsService', ['$http', function($http) {
    'use strict';
    // each function returns a promise object
    return {
        // call to get all entries
        getFacts : function() {
            return $http.get('/api/getFacts', {cache: true});
        }
    };

}]);


// Get CITATE ARISTOTEL
angular.module('CitateAristotelService', []).factory('CitateAristotelService', ['$http', function($http) {
    'use strict';
    // each function returns a promise object
    return {
        getCitateAristotel : function() {
           return $http.get('/api/getCitateAristotel', {cache: true});
        }
    };
}]);


angular.module('UserService', []).factory('UserService', ['$http', function($http) {
    'use strict';
    // each function returns a promise object
    return {
        getMe : function() {
           return $http.get('/api/me');
        }
    };
}]);

angular.module('LoginService', []).factory('LoginService', ['$http', '$rootScope', '$auth', function($http, $rootScope, $auth) {
    'use strict';
    // each function returns a promise object
    return {
        // call to get all entries
        isAuthenticated : function() {
            return $auth.isAuthenticated();
        },
        login : function(user) {
            console.log('login : ',user);
            return $auth.login(user);
        },
        logout : function() {
            console.log('logout in LoginService');
            //$cookies.remove('session');
            return $auth.logout();
        },
        signup : function(user) {
            console.log('signup : ',user);
            return $auth.signup(user);
        },
        setToken : function(token) {
            console.log('setToken');
            return $auth.setToken(token);
        }
    };
}]);
