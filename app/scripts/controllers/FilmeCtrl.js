/**********************************
********* Filme Controller ********
***********************************/
/**
*
* no globals are left behind because of the IIFE (JavaScript Closures)
*/
(function() {
    'use strict';

    function FilmeCtrl(){
        console.log('Top Filme Controller');


    }

    angular
        .module('myAngularApp')
        .controller('FilmeCtrl', [FilmeCtrl]);
})();
