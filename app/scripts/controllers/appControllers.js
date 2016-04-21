/**********************************
*****Controller on the app Body****
***********************************/
angular.module('appWrapController', []).controller('appWrapController', ['$scope', '$http', '$routeParams', '$location', '$window', 'appWrapService', '$state', 'LoginService', function($scope, $http, $routeParams, $location, $window, appWrapService, $state, LoginService) {
    console.log('app wrap controller');

    $scope.isAuthenticated = function() {
        //console.log('NavbarCtrl isAuthenticated',LoginService.isAuthenticated())
        return LoginService.isAuthenticated();
    };

    $scope.logout = function() {
        LoginService.logout().then(function(response) {
            console.log('logged out');
            $state.go('/home');
        });
    }

    appWrapService.getMenu()
        .success(function(data) {
            $scope.menuItems = data[0];
    });

    $scope.accessLevel = 0;
    $scope.onlyOneGroup = true;

    //google analytics
    $scope.$on('$viewContentLoaded', function(event) {
        $window.ga('send', 'pageview', { page: $location.path() });
    });

    $scope.changeAccessLevel = function(newVal) {
        $scope.accessLevel = newVal;
        $scope.onlyOneGroup = true;
        if(newVal > 0){
            $('#homeButton').removeClass('hide')
        }else{
            $('#homeButton').addClass('hide');
        }
    };

    var mobileMenuButton;
    var mobileMenuButtonAnimate;
    // Document ready() !
    angular.element(document).ready(function () {
        console.log('Document Ready from Angular');
        mobileMenuButton = document.querySelector('#mobileMenuBtn');
        mobileMenuButtonAnimate = document.querySelector('.menu-icon');

        if (document.addEventListener) {                // For all major browsers, except IE 8 and earlier
            mobileMenuButton.addEventListener('click', slideMenu);
        } else if (document.attachEvent) {              // For IE 8 and earlier versions
            mobileMenuButton.attachEvent('onclick', slideMenu);
        }

        function slideMenu(){
            mobileMenuButtonAnimate.classList.toggle('open');
            $( '#MenuWrapper' ).slideToggle( 'slow', function() {
                // Animation complete.
            });
        }

    });



    $scope.memoriseMenuRoute = [];
    $scope.memoriseMenuRouteShort = [];
    $scope.clickMenuItem = function(event) {
        console.log('click a element ' + this)
        /*
            Fac clear la text input field din Search: document.getElementById('searchField').value = '';
            Fac clear si la $scope search filter: $scope.justAquery1 = '';
            Apoi daca search input field este 0 resetez accessLevel si onegrup true

            Problema era ca daca cautam prin menu dupa 'Ban'c sa spunem.., imi ramanea doar 1 item (Banc), iar daca faceam click pe el nu imi arata alte rezultate din catgoria Bancuri care nu corespundeau cu literele folosite in search field. Iar pentru asta a trebuit sa fac clear la search field, dar daca fac clear la search field imi arata tot meniul cu toti itemii
        */
        document.getElementById('searchField').value = '';
        $scope.justAquery1 = '';
        /*if($('#searchField').val() == ''){
            $scope.accessLevel = 0;
            $scope.onlyOneGroup = true;
            console.log('lala')
        }*/
        // end block;

        if(event.target.id !== undefined){
            $scope.accessLevel = event.target.id;
            $scope.onlyOneGroup = true;
        }
        if($scope.accessLevel > 0){
            $('#homeButton').removeClass('hide')
        }

        $scope.memoriseMenuRoute.push(event.target.href);
        $scope.shortPath = $scope.memoriseMenuRoute[($scope.memoriseMenuRoute.length-1)].split('/').pop();

        if(event.target.dataset.lastmenu == 'false'){
            $scope.memoriseMenuRouteShort.push($scope.shortPath);
            $scope.memoriseMenuId.push($scope.accessLevel);
        }else{
            // event.target.addClass(':hover > span');
           /* mobileMenuButtonAnimate.classList.toggle('open');
            $( '#MenuWrapper' ).slideToggle( 'slow', function() {
                // Animation complete.
            });*/
        }

    }

    $scope.memoriseMenuId = [];
    $scope.clickHomeButton = function(event){
        console.log('click home buton');
        $scope.memoriseMenuRouteShort.pop();
        $scope.memoriseMenuId.pop();

        if($scope.memoriseMenuRouteShort.length == 0){
            $state.go('/home');
        }else{
            $location.path($scope.memoriseMenuRouteShort[($scope.memoriseMenuRouteShort.length-1)]);
        }

        $scope.result = parseFloat($scope.memoriseMenuId[($scope.memoriseMenuId.length-1)])
        $scope.accessLevel = $scope.result;

        if($scope.memoriseMenuId.length == 0){
            $scope.accessLevel = 0;
            $('#homeButton').addClass('hide');
        }
    }

    $('#searchField').bind('input', function() {
        $scope.accessLevel = 1000;
        $scope.onlyOneGroup = false;
        if($('#searchField').val() == ''){
            $scope.accessLevel = 0;
        }
    });

}]);


//RepeatController Controller
angular.module('RepeatController', []).controller('RepeatController', ['$scope', function($scope) {
    console.log('RepeatController Controller');

    $scope.$watch('$index', function(index) {
      $scope.number = (index + 1) + ($scope.currentPage - 1) * $scope.pageSize;
    });

}]);


/**********************************
********** Home Controller ********
***********************************/
angular.module('HomeCtrl', []).controller('HomeCtrl', ['$scope', '$routeParams', 'resolveUlMeu', function($scope, $routeParams, resolveUlMeu) {
    console.log('HomeController');
    $scope.changeAccessLevel(0);
    console.log('resolve',resolveUlMeu)
    $scope.WelcomeMessage = 'Welcome Home!';
}]);



/************* MENU 1 *************
************** Arta  **************
***********************************/

//Arta Home Controller
angular.module('ArtaHomeCtrl', []).controller('ArtaHomeCtrl', ['$scope', '$log', '$filter', '$routeParams', function($scope, $log, $filter, $routeParams) {
    console.log('Arta Home Controller');
    $scope.WelcomeMessage = 'Welcome to Arta Home!';
    $scope.changeAccessLevel(1);
}]);



/************* MENU 2 *************
************** Liste **************
***********************************/

//Liste Home Controller
angular.module('ListeCtrl', []).controller('ListeCtrl', ['$scope', '$log', '$filter', '$routeParams', function($scope, $log, $filter, $routeParams) {
    console.log('Liste Home Controller');
    $scope.WelcomeMessage = 'Welcome to Liste Home!';
    $scope.changeAccessLevel(2);
}]);

//Top Carti Controller
angular.module('TopCartiCtrl', []).controller('TopCartiCtrl', ['$scope', '$log', '$filter', '$routeParams', 'topCartiService', function($scope, $log, $filter, $routeParams, topCartiService) {
    $scope.WelcomeMessage = 'Welcome to Top Carti!';
    $scope.changeAccessLevel(21);


    $('body').css('backgroundColor','#FFFDE4');

    $scope.cartiCrestine = [];
    $scope.cartiInteresante = [];

    topCartiService.getTopCarti().success(function(data){

        for(var i=0;i<data.length;i++){
            $scope.timeStamp = parseInt(data[i]._id.toString().substr(0,8), 16)*1000
            date = new Date($scope.timeStamp)
            data[i].data = date;

            if(data[i].category == 'crestine'){
                $scope.cartiCrestine.push(data[i]);
            }else if(data[i].category == 'interesante'){
                $scope.cartiInteresante.push(data[i]);
            }
        }
    });


    //Pagination definition.
    $scope.currentPage = 1;
    $scope.pageSize = 5;

    $scope.pageChangeHandler = function(num) {
        console.log('change to page ' + num);
    };


}]);

//Top DESENE Controller
angular.module('TopDeseneCtrl', []).controller('TopDeseneCtrl', ['$scope', '$log', '$filter', '$routeParams', 'topDeseneService', '$document', function($scope, $log, $filter, $routeParams, topDeseneService, $document) {
    console.log('Top Desene Controller');
    $scope.WelcomeMessage = 'Welcome to Top Desene!';


    $scope.desene = [];

    topDeseneService.getDesene().success(function(data){

        for(var i=0;i<data.length;i++){
            $scope.timeStamp = parseInt(data[i]._id.toString().substr(0,8), 16)*1000
            date = new Date($scope.timeStamp)
            data[i].data = date;

            $scope.desene.push(data[i]);
            console.log($scope.desene);
        }
    });


    //Pagination definition.
    $scope.currentPage = 1;
    $scope.pageSize = 100;

    $scope.pageChangeHandler = function(num) {
        console.log('change to page ' + num);
    };
}]);

//Top Filme Controller
angular.module('TopFilmeCtrl', []).controller('TopFilmeCtrl', ['$scope', '$log', '$filter', '$routeParams', function($scope, $log, $filter, $routeParams) {
    console.log('Top Filme Controller');
    $scope.WelcomeMessage = 'Welcome to Top Filme!';
    //$scope.changeAccessLevel(23);
}]);


/************* MENU 3 *************
************** Media **************
***********************************/

//Media Home Controller
angular.module('MediaCtrl', []).controller('MediaCtrl', ['$scope', '$log', '$filter', '$routeParams', function($scope, $log, $filter, $routeParams) {
    console.log('Media Home Controller');
    $scope.WelcomeMessage = 'Welcome to Media Home!';
    $scope.changeAccessLevel(3);
}]);


//Youtube Controller
angular.module('YoutubeCtrl', []).controller('YoutubeCtrl', ['$scope', '$log', '$filter', '$routeParams', 'youtubeEmbedUtils', function($scope, $log, $filter, $routeParams, youtubeEmbedUtils) {
    console.log('Youtube Controller');
    $scope.WelcomeMessage = 'Welcome to Youtube!';
    $scope.theBestVideo1 = 'kKv_eZwJh34';
    $scope.theBestVideo2 = 'kkJXmcMtPws';
    $scope.theBestVideo3 = '0FI7PXvffbg';
    $scope.theBestVideo4 = 'YibGpBSPibI';

    $scope.changeAccessLevel(32);
}]);

//Music Controller
angular.module('MusicCtrl', []).controller('MusicCtrl', ['$scope', '$log', '$filter', '$routeParams', 'youtubeEmbedUtils', 'musicService', function($scope, $log, $filter, $routeParams, youtubeEmbedUtils, musicService) {
    console.log('Music Controller');
    $scope.changeAccessLevel(3241);


    $scope.calmMusic = [];
    $scope.chillMusic = [];
    $scope.clubMusic  = [];
    $scope.spaceOutMusic = [];

    musicService.getMusic().success(function(data){

        for(var i=0;i<data.length;i++){

            if(data[i].category == 'calm'){
                $scope.calmMusic.push(data[i]);
            }else if(data[i].category == 'chill'){
                $scope.chillMusic.push(data[i]);
            }
            else if(data[i].category == 'club'){
                $scope.clubMusic.push(data[i]);
            }
            else if(data[i].category == 'spaceOut'){
                $scope.spaceOutMusic.push(data[i]);
            }
        }
        console.log($scope.calmMusic)
    });



    //Pagination definition.
    $scope.currentPage = 1;
    $scope.pageSize = 15;

    $scope.pageChangeHandler = function(num) {
        console.log('change to page ' + num);
    };
}]);





/************ MENU 5 **************
********* Suflet & Minte **********
***********************************/

//Suflet & Minte Home Controller
angular.module('SufletMinteCtrl', []).controller('SufletMinteCtrl', ['$scope', '$log', '$filter', '$routeParams', function($scope, $log, $filter, $routeParams) {
    console.log('Suflet & Minte Home Controller');
    $scope.WelcomeMessage = 'Welcome to Suflet & Minte Home!';
    $scope.changeAccessLevel(4);
}]);

//Aforisme Controller
angular.module('AforismeCtrl', []).controller('AforismeCtrl', ['$scope', '$log', '$filter', '$routeParams', function($scope, $log, $filter, $routeParams) {
    console.log('Aforisme Controller');
    $scope.WelcomeMessage = 'Welcome to Aforisme!';
    //$scope.changeAccessLevel(41);
}]);

//Citate Controller
angular.module('CitateCtrl', []).controller('CitateCtrl', ['$scope', '$log', '$filter', '$routeParams', function($scope, $log, $filter, $routeParams) {
    console.log('Citate Controller');
    $scope.WelcomeMessage = 'Welcome to Citate!';
    $scope.changeAccessLevel(42);
}]);

//Citate Aristotel Controller
angular.module('CitateAristotelCtrl', []).controller('CitateAristotelCtrl', ['$scope', '$log', '$filter', '$routeParams', 'CitateAristotelService', function($scope, $log, $filter, $routeParams, CitateAristotelService) {
    console.log('CitateAristotelCtrl Controller');
    $scope.WelcomeMessage = 'Welcome to Citate!';
    $scope.changeAccessLevel(42);

    $scope.citate = [];


    CitateAristotelService.getCitateAristotel().success(function(data){

        for(var i=0;i<data.length;i++){
            $scope.citate.push(data[i]);
        }
    });



    //Pagination definition.
    $scope.currentPage = 1;
    $scope.pageSize = 20;

    $scope.pageChangeHandler = function(num) {
        console.log('change to page ' + num);
    };
}]);




//Cuvinte Controller
angular.module('CuvinteCtrl', []).controller('CuvinteCtrl', ['$scope', '$log', '$filter', '$routeParams', function($scope, $log, $filter, $routeParams) {
    console.log('Cuvinte Controller');
    $scope.WelcomeMessage = 'Welcome to Cuvinte!';
    //$scope.changeAccessLevel(43);
}]);

//Devize De Viata Controller
angular.module('DevizeDeViataCtrl', []).controller('DevizeDeViataCtrl', ['$scope', '$log', '$filter', '$routeParams', function($scope, $log, $filter, $routeParams) {
    console.log('Devize De Viata Controller');
    $scope.WelcomeMessage = 'Welcome to Devize De Viata!';
    //$scope.changeAccessLevel(44);
}]);

//Lozinci Controller
angular.module('LozinciCtrl', []).controller('LozinciCtrl', ['$scope', '$log', '$filter', '$routeParams', function($scope, $log, $filter, $routeParams) {
    console.log('Lozinci Controller');
    $scope.WelcomeMessage = 'Welcome to Lozinci!';
    //$scope.changeAccessLevel(45);
}]);

//Maxime Controller
angular.module('MaximeCtrl', []).controller('MaximeCtrl', ['$scope', '$log', '$filter', '$routeParams', function($scope, $log, $filter, $routeParams) {
    console.log('Maxime Controller');
    $scope.WelcomeMessage = 'Welcome to Maxime!';
   // $scope.changeAccessLevel(46);
}]);


/************ MENU 5 **************
********** Folositoare ************
***********************************/

//Folositoare Home Controller
angular.module('FolositoareCtrl', []).controller('FolositoareCtrl', ['$scope', '$log', '$filter', '$routeParams', function($scope, $log, $filter, $routeParams) {
    console.log('Folositoare Home Controller');
    $scope.WelcomeMessage = 'Welcome to Folositoare Home!';
    $scope.changeAccessLevel(5);
}]);



//Constitutia Romaniei Controller
angular.module('ConstitutiaRomanieiCtrl', []).controller('ConstitutiaRomanieiCtrl', ['$scope', '$log', '$filter', '$routeParams', function($scope, $log, $filter, $routeParams) {
    console.log('Constitutia Romaniei Controller');
    $scope.WelcomeMessage = 'Welcome to Constitutia Romaniei!';
    $scope.changeAccessLevel(51);
}]);

//Drepturile Omului Controller
angular.module('DrepturileOmuluiCtrl', []).controller('DrepturileOmuluiCtrl', ['$scope', '$log', '$filter', '$routeParams', function($scope, $log, $filter, $routeParams) {
    console.log('Drepturile Omului Controller');
    $scope.WelcomeMessage = 'Welcome to Drepturile Omului!';
    $scope.changeAccessLevel(52);
}]);



/**********************************
********** Mongodb service ********
***********************************/
angular.module('Menu1Ctrl', []).controller('Menu1Controller', function($scope, appWrapService, $filter, $log) {

    console.log('Menu 1  Controller');

    //Necessary for clearing the modal form;
    $scope.cuvant = '';
    $scope.entryCuvant = '';
    $scope.entryDefinitie = '';
    $scope.entryId = '';

    //Categories to chose from in the create new entry modal;
    $scope.categories = [
        {name: 'EN-ORD'},
        {name: 'ETT-ORD'},
        {name: 'VERB'},
        {name: 'VERB-PAST-FORM'},
        {name: 'RESOR'},
        {name: 'MAT'},
        {name: 'MEDICIN'}
    ];


    //select a default value for the select in the create new entry modal;
    $scope.category = $scope.categories[0];

    // GET =====================================================================
    // when landing on the page, get all todos and show them
    // use the service to get all the entries
    appWrapService.get()
        .success(function(data) {
           // $scope.definitii = data;
           // console.dir(data);

            $scope.en_ord = $filter('filter')(data, { categoria: 'EN-ORD' });
            $scope.ett_ord = $filter('filter')(data, { categoria: 'ETT-ORD' });
            $scope.verb = $filter('filter')(data, { categoria: 'VERB' });
            $scope.verb_past_form = $filter('filter')(data, { categoria: 'VERB-PAST-FORM' });
            $scope.resor = $filter('filter')(data, { categoria: 'RESOR' });
            $scope.mat = $filter('filter')(data, { categoria: 'MAT' });
            $scope.medicin = $filter('filter')(data, { categoria: 'MEDICIN' });
    });


    $scope.formSubmit = function() {
        //console.log('category: '+$scope.category.name);

        $('#createModal').modal('hide');

        //this is the document that get's sent to the database;
        $scope.doc = {
            'type':'dictionar',
            'word' : '' + $scope.cuvant,
            'definition' : '' + $scope.definitia,
            'category' : '' + $scope.category.name
        };

        appWrapService.create($scope.doc).success(function(data) {
            console.log('this is the new entry returned from the API to the Service and from the Service to the Controller: ',data[0].categoria);
            if(data[0].categoria == $scope.categories[0].name){
                $scope.en_ord.push(data[0]);
            }
            if(data[0].categoria == $scope.categories[1].name){
                $scope.ett_ord.push(data[0]);
            }
            if(data[0].categoria == $scope.categories[2].name){
                console.log('verb')
                $scope.verb.push(data[0]);
            }
            if(data[0].categoria == $scope.categories[3].name){
                $scope.verb_past_form.push(data[0]);
            }
            if(data[0].categoria == $scope.categories[4].name){
                $scope.resor.push(data[0]);
            }
            if(data[0].categoria == $scope.categories[5].name){
                $scope.mat.push(data[0]);
            }
            if(data[0].categoria == $scope.categories[6].name){
                $scope.medicin.push(data[0]);
            }


        });
    }

    $scope.clickCreate = function() {
        $scope.cuvant = '';
        $scope.definitia = '';
        $scope.category = $scope.categories[0];
    }

    $scope.clickEdit = function(definitie, $event) {
        console.log('definitie '+definitie.categoria);

        $scope.entryId = definitie._id;

        //get the index position in the array by the category name of the definition selected;
        pos = $scope.categories.map(function(e) { return e.name; }).indexOf(definitie.categoria);
        $scope.category = $scope.categories[pos];

        //put the values of the clicked definition in the input fields for it to be modified;
        $scope.cuvant = definitie.cuvant;
        $scope.definitia = definitie.definitia;
    }

    $scope.formEditSubmit = function() {
        $('#editModal').modal('hide');

        console.log('scope.cuvant: '+$scope.cuvant);

        $scope.doc = {
            'tip':'dictionar',
            'cuvant' : '' + $scope.cuvant,
            'definitia' : '' + $scope.definitia,
            'data':'Aprilie',
            'categoria' : '' + $scope.category.name
        };
        var obj = {entryId : $scope.entryId, doc : $scope.doc}

        appWrapService.update(obj).success(function() {
            console.dir('se reapeleaza dupa ce fac edit');
            appWrapService.get()
                .success(function(data) {
                    $scope.en_ord = $filter('filter')(data, { categoria: 'EN-ORD' });
                    $scope.ett_ord = $filter('filter')(data, { categoria: 'ETT-ORD' });
                    $scope.verb = $filter('filter')(data, { categoria: 'VERB' });
                    $scope.verb_past_form = $filter('filter')(data, { categoria: 'VERB-PAST-FORM' });
                    $scope.resor = $filter('filter')(data, { categoria: 'RESOR' });
                    $scope.mat = $filter('filter')(data, { categoria: 'MAT' });
                    $scope.medicin = $filter('filter')(data, { categoria: 'MEDICIN' });
            });
        });

        //this is the document that get's sent to the database;

    }


    //this var is for memorizing the entry that needs to be deleted;
    var holdDefinitie;
    $scope.clickDelete = function(definitie, $event) {
        holdDefinitie = definitie;
        $scope.entryCuvant  = definitie.cuvant;
        $scope.entryDefinitie = definitie.definitia;
        $('#modalAlert').modal('show');
    }

    $scope.confirmDeletion = function() {

        appWrapService.del(holdDefinitie._id).success(function() {
            console.dir('se reapeleaza dupa ce fac delete');

            //After deleting something bring again the refreshed entries from db to reflect the truth in each category;
            appWrapService.get()
                .success(function(data) {
                    $scope.en_ord = $filter('filter')(data, { categoria: 'EN-ORD' });
                    $scope.ett_ord = $filter('filter')(data, { categoria: 'ETT-ORD' });
                    $scope.verb = $filter('filter')(data, { categoria: 'VERB' });
                    $scope.verb_past_form = $filter('filter')(data, { categoria: 'VERB-PAST-FORM' });
                    $scope.resor = $filter('filter')(data, { categoria: 'RESOR' });
                    $scope.mat = $filter('filter')(data, { categoria: 'MAT' });
                    $scope.medicin = $filter('filter')(data, { categoria: 'MEDICIN' });
            });
        });

        $('#modalAlert').modal('hide');
    }


    $('#createModal').on('shown.bs.modal', function() {
        $(this).find('input:first').focus();
    });


    $('#exampleModal').on('hide.bs.modal', function () {
        //clear modal input fields;
        $('#recipient-name').val('');
        $('#message-text').val('');
    });

    //Pagination definition.
    $scope.currentPage = 1;
    $scope.pageSize = 5;

    $scope.pageChangeHandler = function(num) {
        console.log('meals page changed to ' + num);
    };

});
