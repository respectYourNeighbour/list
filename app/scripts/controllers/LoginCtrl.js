/**********************************
********* Login Controller ********
***********************************/
/**
*
* no globals are left behind because of the IIFE (JavaScript Closures)
*/
(function() {
    'use strict';

    function LoginCtrl($scope, $state, LoginService, toastr) {
        this.login = function() {
            console.log('Login controller ' + this.user);

            LoginService.login(this.user).then(function(response) {
                console.log('function response',response);
                toastr.success('You have successfully signed in');
                $state.go('/home');
            }).catch(function(response) {
                toastr.error(response.data.message, response.status);
                console.log('response',response);
            });
        };

        $scope.status = 'ready';
    }

    angular
        .module('myAngularApp')
        .controller('LoginCtrl', ['$scope', '$state', 'LoginService', 'toastr', LoginCtrl]);
})();
