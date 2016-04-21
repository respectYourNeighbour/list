// public/js/appRoutes.js
    angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    'use strict';

    $routeProvider
    // home page
    .when('/', {
        templateUrl: '/views/home.html',
        controller: 'HomeCtrl'
    })
    .when('/menu1', {
        templateUrl: 'views/menu1.html',
        controller: 'Menu1Controller'
    })
    /*ARTA*/
    .when('/folder1', {
        templateUrl: '/views/folder1/folder1.html',
        controller: 'ArtaHomeCtrl'
    })
        /*BANCURI*/
        .when('/category1_1', {
            templateUrl: '/views/folder1/category1_1/category1_1.html',
            controller: 'BancuriCtrl'
        })
            /*ANIMALE*/
            .when('/subcategory1_1_1', {
                templateUrl: '/views/folder1/category1_1/subcat_1_1_1.html',
                controller: 'BancuriCtrl'
            })
            /*DIVERSE*/
            .when('/subcategory1_1_2', {
                templateUrl: '/views/folder1/category1_1/subcat_1_1_2.html',
                controller: 'BancuriCtrl'
            })
        /*CULMI*/
        .when('/category1_2', {
            templateUrl: '/views/folder1/category1_2/category1_2.html',
            controller: 'CulmiCtrl'
        })
        /*GHICITORI*/
        .when('/category1_3', {
            templateUrl: '/views/folder1/category1_3/category1_3.html',
            controller: 'GhicitoriCtrl'
        })
        /*ANUNTURI ROMANESTI*/
        .when('/category1_4', {
            templateUrl: '/views/folder1/category1_4/category1_4.html',
            controller: 'AnunturiCtrl'
        })
    /*LISTE*/
    .when('/folder2', {
        templateUrl: '/views/folder2/folder2.html',
        controller: 'ListeCtrl'
    })
        /*TOP CARTI*/
        .when('/category2_1', {
            templateUrl: '/views/folder2/category2_1/category2_1.html',
            controller: 'TopCartiCtrl'
        })
            /*CRESTINE*/
            .when('/subcategory2_1_1', {
                templateUrl: '/views/folder2/category2_1/subcat_2_1_1.html',
                controller: 'TopCartiCtrl'
            })
            /*INTERESANTE*/
            .when('/subcategory2_1_2', {
                templateUrl: '/views/folder2/category2_1/subcat_2_1_2.html',
                controller: 'TopCartiCtrl'
            })
        /*TOP DESENE*/
        .when('/category2_2', {
            templateUrl: '/views/folder2/category2_2/category2_2.html',
            controller: 'TopDeseneCtrl'
        })
        /*TOP FILME*/
        .when('/category2_3', {
            templateUrl: '/views/folder2/category2_3/category2_3.html',
            controller: 'TopFilmeCtrl'
        })
    /*MEDIA*/
    .when('/folder3', {
        templateUrl: '/views/folder3/folder3.html',
        controller: 'MediaCtrl'
    })
        /*GIFS*/
        .when('/category3_1', {
            templateUrl: '/views/folder3/category3_1/category3_1.html',
            controller: 'GifsCtrl'
        })
            /*GIFS*/
            .when('/subcategory3_1_1', {
                templateUrl: '/views/folder3/category3_1/subcat_3_1_1.html',
                controller: 'GifsCtrl'
            })
            //COOL
            .when('/subcategory3_1_2', {
                templateUrl: '/views/folder3/category3_1/subcat_3_1_2.html',
                controller: 'GifsCtrl'
            })
            //FAIL
            .when('/subcategory3_1_3', {
                templateUrl: '/views/folder3/category3_1/subcat_3_1_3.html',
                controller: 'GifsCtrl'
            })
            //FUNNY
            .when('/subcategory3_1_4', {
                templateUrl: '/views/folder3/category3_1/subcat_3_1_4.html',
                controller: 'GifsCtrl'
            })
            //INTERESTING
            .when('/subcategory3_1_5', {
                templateUrl: '/views/folder3/category3_1/subcat_3_1_5.html',
                controller: 'GifsCtrl'
            })
            //WOW
            .when('/subcategory3_1_6', {
                templateUrl: '/views/folder3/category3_1/subcat_3_1_6.html',
                controller: 'GifsCtrl'
            })
        .when('/category3_2', {
            templateUrl: '/views/folder3/category3_2/category3_2.html',
            controller: 'YoutubeCtrl'
        })
            .when('/subcategory3_2_1', {
                templateUrl: '/views/folder3/category3_2/subcat_3_2_1.html',
                controller: 'YoutubeCtrl'
            })
            .when('/subcategory3_2_2', {
                templateUrl: '/views/folder3/category3_2/subcat_3_2_2.html',
                controller: 'YoutubeCtrl'
            })
            .when('/subcategory3_2_3', {
                templateUrl: '/views/folder3/category3_2/subcat_3_2_3.html',
                controller: 'YoutubeCtrl'
            })
            //MUSIC
            .when('/subcategory3_2_4', {
                templateUrl: '/views/folder3/category3_2/subcat_3_2_4.html',
                controller: 'MusicCtrl'
            })
                //CALM
                .when('/subcategory3_2_4_1', {
                    templateUrl: '/views/folder3/category3_2/subcat_3_2_4_1/subcat_3_2_4_1.html',
                    controller: 'MusicCtrl'
                })
                //CHILL
                .when('/subcategory3_2_4_2', {
                    templateUrl: '/views/folder3/category3_2/subcat_3_2_4_2/subcat_3_2_4_2.html',
                    controller: 'MusicCtrl'
                })
                //CLUB
                .when('/subcategory3_2_4_3', {
                    templateUrl: '/views/folder3/category3_2/subcat_3_2_4_3/subcat_3_2_4_3.html',
                    controller: 'MusicCtrl'
                })
                //SPACEOUT
                .when('/subcategory3_2_4_4', {
                    templateUrl: '/views/folder3/category3_2/subcat_3_2_4_4/subcat_3_2_4_4.html',
                    controller: 'MusicCtrl'
                })
    /*SUFLET & MINTE*/
    .when('/folder4', {
        templateUrl: '/views/folder4/folder4.html',
        controller: 'SufletMinteCtrl'
    })
        .when('/category4_1', {
            templateUrl: '/views/folder4/category4_1/category4_1.html',
            controller: 'AforismeCtrl'
        })
        //CITATE
        .when('/category4_2', {
            templateUrl: '/views/folder4/category4_2/category4_2.html',
            controller: 'CitateCtrl'
        })
            // ABRAHAM LINCOLN
            .when('/category4_2_1', {
                templateUrl: '/views/folder4/category4_2/category4_2_1.html',
                controller: 'CitateCtrl'
            })
        .when('/category4_3', {
            templateUrl: '/views/folder4/category4_3/category4_3.html',
            controller: 'CuvinteCtrl'
        })
        .when('/category4_4', {
            templateUrl: '/views/folder4/category4_4/category4_4.html',
            controller: 'DevizeDeViataCtrl'
        })
        .when('/category4_5', {
            templateUrl: '/views/folder4/category4_5/category4_5.html',
            controller: 'LozinciCtrl'
        })
        .when('/category4_6', {
            templateUrl: '/views/folder4/category4_6/category4_6.html',
            controller: 'MaximeCtrl'
        })
        .when('/category4_7', {
            templateUrl: '/views/folder4/category4_7/category4_7.html',
            controller: 'ProverbeCtrl'
        })
            .when('/subcategory4_7_1', {
                templateUrl: '/views/folder4/category4_7/subcat_4_7_1.html',
                controller: 'ProverbeCtrl'
            })
            .when('/subcategory4_7_2', {
                templateUrl: '/views/folder4/category4_7/subcat_4_7_2.html',
                controller: 'ProverbeCtrl'
            })
            .when('/subcategory4_7_3', {
                templateUrl: '/views/folder4/category4_7/subcat_4_7_3.html',
                controller: 'ProverbeCtrl'
            })
            .when('/subcategory4_7_4', {
                templateUrl: '/views/folder4/category4_7/subcat_4_7_4.html',
                controller: 'ProverbeCtrl'
            })
            .when('/subcategory4_7_5', {
                templateUrl: '/views/folder4/category4_7/subcat_4_7_5.html',
                controller: 'ProverbeCtrl'
            })
            .when('/subcategory4_7_6', {
                templateUrl: '/views/folder4/category4_7/subcat_4_7_6.html',
                controller: 'ProverbeCtrl'
            })
            .when('/subcategory4_7_7', {
                templateUrl: '/views/folder4/category4_7/subcat_4_7_7.html',
                controller: 'ProverbeCtrl'
            })
        //FACTS
        .when('/category4_8', {
            templateUrl: '/views/folder4/category4_8/category4_8.html',
            controller: 'FactsCtrl'
        })
    .when('/folder5', {
        templateUrl: '/views/folder5/folder5.html',
        controller: 'FolositoareCtrl'
    })
        .when('/category5_1', {
            templateUrl: '/views/folder5/category5_1/category5_1.html',
            controller: 'BookmarksCtrl'
        })
            .when('/subcategory5_1_1', {
                templateUrl: '/views/folder5/category5_1/subcat_5_1_1.html',
                controller: 'BookmarksCtrl'
            })
            .when('/subcategory5_1_2', {
                templateUrl: '/views/folder5/category5_1/subcat_5_1_2.html',
                controller: 'BookmarksCtrl'
            })
            .when('/subcategory5_1_3', {
                templateUrl: '/views/folder5/category5_1/subcat_5_1_3.html',
                controller: 'BookmarksCtrl'
            })
        .when('/category5_2', {
            templateUrl: '/views/folder5/category5_2/category5_2.html',
            controller: 'CodulPenalCtrl'
        })
            .when('/subcategory5_2_1', {
                templateUrl: '/views/folder5/category5_2/subcat_5_2_1.html',
                controller: 'CodulPenalCtrl'
            })
            .when('/subcategory5_2_2', {
                templateUrl: '/views/folder5/category5_2/subcat_5_2_2.html',
                controller: 'CodulPenalCtrl'
            })
            .when('/subcategory5_2_3', {
                templateUrl: '/views/folder5/category5_2/subcat_5_2_3.html',
                controller: 'CodulPenalCtrl'
            })
        .otherwise('/');

    $locationProvider.html5Mode(true);

}]);
