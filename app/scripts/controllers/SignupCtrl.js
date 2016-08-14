/**********************************
********* Signup Controller *******
***********************************/
/**
*
* no globals are left behind because of the IIFE (JavaScript Closures)
*/
(function() {
    'use strict';

    function SignupCtrl($scope, $state, toastr, LoginService){
        this.user = this.user;
        this.signup = function() {
            console.log('SignupCtrl controller ' + this.user);

            LoginService.signup(this.user).then(function(response) {
                console.log('SignupCtrl function response', response, this.user);
                toastr.success('You have successfully signed up' + this.user);
                LoginService.login(this.user).then(function(response) {
                    LoginService.setToken(response);
                    toastr.success('You have successfully signed in');
                    $state.go('/home');
                }).catch(function(response) {
                    toastr.error(response.data.message, response.status);
                    console.log('SignupCtrl response',response);
                });
            }).catch(function(response) {
                toastr.error(response.data.message, response.status);
                console.log('response',response);
            });
        };

        $scope.status = 'ready';
    }

    angular
        .module('myAngularApp')
        .controller('SignupCtrl', ['$scope', '$state', 'toastr', 'LoginService',  SignupCtrl]);
})();
