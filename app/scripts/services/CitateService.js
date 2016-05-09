/********************************
******* Bancuri Service *********
********************************/

(function() {
    'use strict';

    angular
    .module('myAngularApp')
    .factory('CitateService', ['$http', function($http) {

        function getCitateAbrahamLincoln() {
            return $http.get('/api/getCitateAbrahamLincoln', {cache: true});
        }

        function getCitateAlbertEinstein() {
            return $http.get('/api/getCitateAlbertEinstein', {cache: true});
        }

        function getCitateAristotel() {
            return $http.get('/api/getCitateAristotel', {cache: true});
        }

        function getCitateBenjaminFranklin() {
            return $http.get('/api/getCitateBenjaminFranklin', {cache: true});
        }

        function getCitateBuddha() {
            return $http.get('/api/getCitateBuddha', {cache: true});
        }

        function getCitateCharlesDickens() {
            return $http.get('/api/getCitateCharlesDickens', {cache: true});
        }

        function getCitateConfucius() {
            return $http.get('/api/getCitateConfucius', {cache: true});
        }

        function getCitateDalaiLama() {
            return $http.get('/api/getCitateDalaiLama', {cache: true});
        }

        function getCitateDemocrit() {
            return $http.get('/api/getCitateDemocrit', {cache: true});
        }

        function getCitateEuripide() {
            return $http.get('/api/getCitateEuripide', {cache: true});
        }

        function getCitateGeorgeBernardShaw() {
            return $http.get('/api/getCitateGeorgeBernardShaw', {cache: true});
        }

        function getCitateGeorgeWashington() {
            return $http.get('/api/getCitateGeorgeWashington', {cache: true});
        }

        function getCitateImmanuelKant() {
            return $http.get('/api/getCitateImmanuelKant', {cache: true});
        }

        function getCitateLaoTzu() {
            return $http.get('/api/getCitateLaoTzu', {cache: true});
        }

        function getCitateLuciusAnnaeusSeneca() {
            return $http.get('/api/getCitateLuciusAnnaeusSeneca', {cache: true});
        }

        function getCitateMahatmaGandhi() {
            return $http.get('/api/getCitateMahatmaGandhi', {cache: true});
        }

        function getCitateMaicaTereza() {
            return $http.get('/api/getCitateMaicaTereza', {cache: true});
        }

        function getCitateMarkTwain() {
            return $http.get('/api/getCitateMarkTwain', {cache: true});
        }

        function getCitateMartinLutherKingJr() {
            return $http.get('/api/getCitateMartinLutherKingJr', {cache: true});
        }

        function getCitateNapoleonBonaparte() {
            return $http.get('/api/getCitateNapoleonBonaparte', {cache: true});
        }

        function getCitateNealeDonaldWalsh() {
            return $http.get('/api/getCitateNealeDonaldWalsh', {cache: true});
        }

        function getCitateOscarWilde() {
            return $http.get('/api/getCitateOscarWilde', {cache: true});
        }

        function getCitatePabloPicasso() {
            return $http.get('/api/getCitatePabloPicasso', {cache: true});
        }

        function getCitatePlaton() {
            return $http.get('/api/getCitatePlaton', {cache: true});
        }

        function getCitatePubliliusSyrus() {
            return $http.get('/api/getCitatePubliliusSyrus', {cache: true});
        }

        function getCitateRalphWaldoEmerson() {
            return $http.get('/api/getCitateRalphWaldoEmerson', {cache: true});
        }

        function getCitateRichardWurmbrand() {
            return $http.get('/api/getCitateRichardWurmbrand', {cache: true});
        }

        function getCitateSfantulAugustin() {
            return $http.get('/api/getCitateSfantulAugustin', {cache: true});
        }

        function getCitateSfantulCiprian() {
            return $http.get('/api/getCitateSfantulCiprian', {cache: true});
        }

        function getCitateSfantulIoanGuraDeAur() {
            return $http.get('/api/getCitateSfantulIoanGuraDeAur', {cache: true});
        }

        function getCitateSfantulIoanScararul() {
            return $http.get('/api/getCitateSfantulIoanScararul', {cache: true});
        }

        function getCitateSfantulIrineu() {
            return $http.get('/api/getCitateSfantulIrineu', {cache: true});
        }

        function getCitateSfantulPetru() {
            return $http.get('/api/getCitateSfantulPetru', {cache: true});
        }

        function getCitateSfantulSimeonNoulTeolog() {
            return $http.get('/api/getCitateSfantulSimeonNoulTeolog', {cache: true});
        }

        function getCitateSfantulVasileCelMare() {
            return $http.get('/api/getCitateSfantulVasileCelMare', {cache: true});
        }

        function getCitateSocrates() {
            return $http.get('/api/getCitateSocrates', {cache: true});
        }

        function getCitateStevenWright() {
            return $http.get('/api/getCitateStevenWright', {cache: true});
        }

        function getCitateSunTzu() {
            return $http.get('/api/getCitateSunTzu', {cache: true});
        }

        function getCitateThomasJefferson() {
            return $http.get('/api/getCitateThomasJefferson', {cache: true});
        }

        function getCitateWilliamShakespeare() {
            return $http.get('/api/getCitateWilliamShakespeare', {cache: true});
        }

        function getCitateWinstonChurchill() {
            return $http.get('/api/getCitateWinstonChurchill', {cache: true});
        }

        function getCitateAlteCitate() {
            return $http.get('/api/getCitateAlteCitate', {cache: true});
        }


        return {
            getCitateAbrahamLincoln: getCitateAbrahamLincoln,
            getCitateAlbertEinstein: getCitateAlbertEinstein,
            getCitateAristotel: getCitateAristotel,
            getCitateBenjaminFranklin: getCitateBenjaminFranklin,
            getCitateBuddha: getCitateBuddha,
            getCitateCharlesDickens: getCitateCharlesDickens,
            getCitateConfucius: getCitateConfucius,
            getCitateDalaiLama: getCitateDalaiLama,
            getCitateDemocrit: getCitateDemocrit,
            getCitateEuripide: getCitateEuripide,
            getCitateGeorgeBernardShaw: getCitateGeorgeBernardShaw,
            getCitateGeorgeWashington: getCitateGeorgeWashington,
            getCitateImmanuelKant: getCitateImmanuelKant,
            getCitateLaoTzu: getCitateLaoTzu,
            getCitateLuciusAnnaeusSeneca: getCitateLuciusAnnaeusSeneca,
            getCitateMahatmaGandhi: getCitateMahatmaGandhi,
            getCitateMaicaTereza: getCitateMaicaTereza,
            getCitateMarkTwain: getCitateMarkTwain,
            getCitateMartinLutherKingJr: getCitateMartinLutherKingJr,
            getCitateNapoleonBonaparte: getCitateNapoleonBonaparte,
            getCitateNealeDonaldWalsh: getCitateNealeDonaldWalsh,
            getCitateOscarWilde: getCitateOscarWilde,
            getCitatePabloPicasso: getCitatePabloPicasso,
            getCitatePlaton: getCitatePlaton,
            getCitatePubliliusSyrus: getCitatePubliliusSyrus,
            getCitateRalphWaldoEmerson: getCitateRalphWaldoEmerson,
            getCitateRichardWurmbrand: getCitateRichardWurmbrand,
            getCitateSfantulAugustin: getCitateSfantulAugustin,
            getCitateSfantulCiprian: getCitateSfantulCiprian,
            getCitateSfantulIoanGuraDeAur: getCitateSfantulIoanGuraDeAur,
            getCitateSfantulIoanScararul: getCitateSfantulIoanScararul,
            getCitateSfantulIrineu: getCitateSfantulIrineu,
            getCitateSfantulPetru: getCitateSfantulPetru,
            getCitateSfantulSimeonNoulTeolog: getCitateSfantulSimeonNoulTeolog,
            getCitateSfantulVasileCelMare: getCitateSfantulVasileCelMare,
            getCitateSocrates: getCitateSocrates,
            getCitateStevenWright: getCitateStevenWright,
            getCitateSunTzu: getCitateSunTzu,
            getCitateThomasJefferson: getCitateThomasJefferson,
            getCitateWilliamShakespeare: getCitateWilliamShakespeare,
            getCitateWinstonChurchill: getCitateWinstonChurchill,
            getCitateAlteCitate: getCitateAlteCitate
        };

    }]);

}());
