angular.module('myAngularApp', ['satellizer', 'ui.router', 'toastr', 'ngRoute', 'ngSanitize',
        'RepeatController',
    'ListeCtrl',
    'MediaCtrl',
        'YoutubeCtrl',
        'MusicCtrl',
    'SufletMinteCtrl',
        'AforismeCtrl',
        'CitateCtrl',
            'CitateAristotelCtrl',
        'CuvinteCtrl',
        'DevizeDeViataCtrl',
        'LozinciCtrl',
        'MaximeCtrl',
    'FolositoareCtrl',
        'ConstitutiaRomanieiCtrl',
        'DrepturileOmuluiCtrl',
    'HomeCtrl',
    'UserService',
    'Menu1Ctrl', 'appWrapController', 'matchAccessLevel',
    'appWrapService',
    'culmiService',
    'ghicitoriService',
    'anunturiService',
    'gifsService',
    'CitateAristotelService',
    'musicService',
    'factsService',
    'LoginService',
    'angularUtils.directives.dirPagination',
    'appConfig',
    'cgBusy'])

    .config(function($stateProvider, $urlRouterProvider/*, $authProvider*/) {
        'use strict';

        function skipIfLoggedIn($q, $auth) {
            console.log('skipIfLoggedIn');
            var deferred = $q.defer();
            if ($auth.isAuthenticated()) {
                deferred.reject();
            } else {
                deferred.resolve();
            }
            return deferred.promise;
        }

        $stateProvider
            .state('/home', {
                url: '/home',
                templateUrl: 'views/home.html',
                resolve: {

                }
            })
            /*LOGIN*/
            .state('login', {
                url: '/authentication',
                templateUrl: 'views/login.html',
                controller: 'LoginCtrl as login',
                resolve: {
                    //skipIfLoggedIn: skipIfLoggedIn
                }
            })
            /*SIGNUP*/
            .state('signup', {
                url: '/authentication',
                templateUrl: 'views/signup.html',
                controller: 'SignupCtrl as signup',
                resolve: {
                    skipIfLoggedIn: skipIfLoggedIn
                }
            })
            /*ARTA*/
            .state('/folder1', {
                url: '/folder1',
                controller: 'ArtaHomeCtrl',
                templateUrl: '/views/folder1/folder1.html',
                resolve: {

                }
            })
                /*BANCURI*/
                .state('/category1_1', {
                    url: '/category1_1',
                    controller: '',
                    templateUrl: '/views/folder1/category1_1/category1_1.html',
                    resolve: {

                    }
                })
                    /*ANIMALE*/
                    .state('/subcategory1_1_1', {
                        url: '/subcategory1_1_1',
                        controller: 'BancuriAnimaleCtrl',
                        templateUrl: '/views/folder1/category1_1/subcat_1_1_1.html',
                        resolve: {

                        }
                    })
                    /*DIVERSE*/
                    .state('/subcategory1_1_2', {
                        url: '/subcategory1_1_2',
                        controller: 'BancuriDiverseCtrl',
                        templateUrl: '/views/folder1/category1_1/subcat_1_1_2.html',
                        resolve: {

                        }
                    })
                /*CULMI*/
                .state('/category1_2', {
                    url: '/category1_2',
                    controller: 'CulmiCtrl',
                    templateUrl: '/views/folder1/category1_2/category1_2.html',
                    resolve: {

                    }
                })
                /*GHICITORI*/
                .state('/category1_3', {
                    url: '/category1_3',
                    controller: 'GhicitoriCtrl',
                    templateUrl: '/views/folder1/category1_3/category1_3.html',
                    resolve: {

                    }
                })
                /*ANUNTURI ROMANESTI*/
                .state('/category1_4', {
                    url: '/category1_4',
                    controller: 'AnunturiRomanestiCtrl',
                    templateUrl: '/views/folder1/category1_4/category1_4.html',
                    resolve: {

                    }
                })
            /*LISTE*/
            .state('/folder2', {
                url: '/folder2',
                controller: 'ListeCtrl',
                templateUrl: '/views/folder2/folder2.html',
                resolve: {

                }
            })
                /*TOP CARTI*/
                .state('/category2_1', {
                    url: '/category2_1',
                    controller: 'CartiCtrl',
                    templateUrl: '/views/folder2/category2_1/category2_1.html',
                    resolve: {

                    }
                })
                    /*CRESTINE*/
                    .state('/subcategory2_1_1', {
                        url: '/subcategory2_1_1',
                        controller: 'CartiCtrl',
                        templateUrl: '/views/folder2/category2_1/subcat_2_1_1.html',
                        resolve: {

                        }
                    })
                    /*INTERESANTE*/
                    .state('/subcategory2_1_2', {
                        url: '/subcategory2_1_2',
                        controller: 'CartiCtrl',
                        templateUrl: '/views/folder2/category2_1/subcat_2_1_2.html',
                        resolve: {

                        }
                    })
                /*TOP DESENE*/
                .state('/category2_2', {
                    url: '/category2_2',
                    controller: 'TopDeseneCtrl',
                    templateUrl: '/views/folder2/category2_2/category2_2.html',
                    resolve: {

                    }
                })
                /*TOP FILME*/
                .state('/category2_3', {
                    url: '/category2_3',
                    controller: 'FilmeCtrl',
                    templateUrl: '/views/folder2/category2_3/category2_3.html',
                    resolve: {

                    }
                })
            /*MEDIA*/
            .state('/folder3', {
                url: '/folder3',
                controller: 'MediaCtrl',
                templateUrl: '/views/folder3/folder3.html',
                resolve: {

                }
            })
                /*GIFS*/
                .state('/category3_1', {
                    url: '/category3_1',
                    controller: 'GifsCtrl',
                    templateUrl: '/views/folder3/category3_1/category3_1.html',
                    resolve: {

                    }
                })
                    /*COOL*/
                    .state('/subcategory3_1_1', {
                        url: '/subcategory3_1_1',
                        controller: 'GifsCoolCtrl',
                        templateUrl: '/views/folder3/category3_1/subcat_3_1_1.html',
                        resolve: {

                        }
                    })
                    /*FAIL*/
                    .state('/subcategory3_1_2', {
                        url: '/subcategory3_1_2',
                        controller: 'GifsFailCtrl',
                        templateUrl: '/views/folder3/category3_1/subcat_3_1_2.html',
                        resolve: {

                        }
                    })
                    /*FUNNY*/
                    .state('/subcategory3_1_3', {
                        url: '/subcategory3_1_3',
                        controller: 'GifsCtrl',
                        templateUrl: '/views/folder3/category3_1/subcat_3_1_3.html',
                        resolve: {

                        }
                    })
                    /*INTERESTING*/
                    .state('/subcategory3_1_4', {
                        url: '/subcategory3_1_4',
                        controller: 'GifsCtrl',
                        templateUrl: '/views/folder3/category3_1/subcat_3_1_4.html',
                        resolve: {

                        }
                    })
                    /*WOW*/
                    .state('/subcategory3_1_5', {
                        url: '/subcategory3_1_5',
                        controller: 'GifsCtrl',
                        templateUrl: '/views/folder3/category3_1/subcat_3_1_5.html',
                        resolve: {

                        }
                    })
                    /*REACTION*/
                    .state('/subcategory3_1_6', {
                        url: '/subcategory3_1_6',
                        controller: 'GifsCtrl',
                        templateUrl: '/views/folder3/category3_1/subcat_3_1_6.html',
                        resolve: {

                        }
                    })
                /*YOUTUBE*/
                .state('/category3_2', {
                    url: '/category3_2',
                    controller: 'YoutubeCtrl',
                    templateUrl: '/views/folder3/category3_2/category3_2.html',
                    resolve: {

                    }
                })
                    /*DOCUMENTARIES*/
                    .state('/subcategory3_2_1', {
                        url: '/subcategory3_2_1',
                        controller: 'YoutubeCtrl',
                        templateUrl: '/views/folder3/category3_2/subcat_3_2_1.html',
                        resolve: {

                        }
                    })
                    /*FUNNY*/
                    .state('/subcategory3_2_2', {
                        url: '/subcategory3_2_2',
                        controller: 'YoutubeCtrl',
                        templateUrl: '/views/folder3/category3_2/subcat_3_2_2.html',
                        resolve: {

                        }
                    })
                    /*GOOD CHANNELS*/
                    .state('/subcategory3_2_3', {
                        url: '/subcategory3_2_3',
                        controller: 'YoutubeCtrl',
                        templateUrl: '/views/folder3/category3_2/subcat_3_2_3.html',
                        resolve: {

                        }
                    })
                    /*MUSIC*/
                    .state('/subcategory3_2_4', {
                        url: '/subcategory3_2_4',
                        controller: 'MusicCtrl',
                        templateUrl: '/views/folder3/category3_2/subcat_3_2_4.html',
                        resolve: {

                        }
                    })
                        /*CALM*/
                        .state('/subcategory3_2_4_1', {
                            url: '/subcategory3_2_4_1',
                            controller: 'MusicCtrl',
                            templateUrl: '/views/folder3/category3_2/subcat_3_2_4_1/subcat_3_2_4_1.html',
                            resolve: {

                            }
                        })
                        /*CHILL*/
                        .state('/subcategory3_2_4_2', {
                            url: '/subcategory3_2_4_2',
                            controller: 'MusicCtrl',
                            templateUrl: '/views/folder3/category3_2/subcat_3_2_4_2/subcat_3_2_4_2.html',
                            resolve: {

                            }
                        })
                        /*CLUB*/
                        .state('/subcategory3_2_4_3', {
                            url: '/subcategory3_2_4_3',
                            controller: 'MusicCtrl',
                            templateUrl: '/views/folder3/category3_2/subcat_3_2_4_3/subcat_3_2_4_3.html',
                            resolve: {

                            }
                        })
                        /*SPACEOUT*/
                        .state('/subcategory3_2_4_4', {
                            url: '/subcategory3_2_4_4',
                            controller: 'MusicCtrl',
                            templateUrl: '/views/folder3/category3_2/subcat_3_2_4_4/subcat_3_2_4_4.html',
                            resolve: {

                            }
                        })
            /*SUFLET & MINTE*/
            .state('/folder4', {
                url: '/folder4',
                controller: 'SufletMinteCtrl',
                templateUrl: '/views/folder4/folder4.html',
                resolve: {

                }
            })
                /*AFORISME*/
                .state('/category4_1', {
                    url: '/category4_1',
                    controller: 'AforismeCtrl',
                    templateUrl: '/views/folder4/category4_1/category4_1.html',
                    resolve: {

                    }
                })
                /*CITATE*/
                .state('/category4_2', {
                    url: '/category4_2',
                    controller: 'CitateCtrl',
                    templateUrl: '/views/folder4/category4_2/category4_2.html',
                    resolve: {

                    }
                })
                    /*ABRAHAM LINCOLN*/
                    .state('/category4_2_1', {
                        url: '/category4_2_1',
                        controller: 'CitateCtrl',
                        templateUrl: '/views/folder4/category4_2/category4_2_1.html',
                        resolve: {

                        }
                    })
                    /*ABRAHAM LINCOLN*/
                    .state('/category4_2_2', {
                        url: '/category4_2_2',
                        controller: 'CitateCtrl',
                        templateUrl: '/views/folder4/category4_2/category4_2_2.html',
                        resolve: {

                        }
                    })
                    /*ARISTOTEL*/
                    .state('/category4_2_3', {
                        url: '/category4_2_3',
                        controller: 'CitateAristotelCtrl',
                        templateUrl: '/views/folder4/category4_2/category4_2_3.html',
                        resolve: {

                        }
                    })
                /*CUVINTE*/
                .state('/category4_3', {
                    url: '/category4_3',
                    controller: 'CuvinteCtrl',
                    templateUrl: '/views/folder4/category4_3/category4_3.html',
                    resolve: {

                    }
                })
                /*DEVIZE DE VIATA*/
                .state('/category4_4', {
                    url: '/category4_4',
                    controller: 'DevizeDeViataCtrl',
                    templateUrl: '/views/folder4/category4_4/category4_4.html',
                    resolve: {

                    }
                })
                /*LOZINCI*/
                .state('/category4_5', {
                    url: '/category4_5',
                    controller: 'LozinciCtrl',
                    templateUrl: '/views/folder4/category4_5/category4_5.html',
                    resolve: {

                    }
                })
                /*MAXIME*/
                .state('/category4_6', {
                    url: '/category4_6',
                    controller: 'MaximeCtrl',
                    templateUrl: '/views/folder4/category4_6/category4_6.html',
                    resolve: {

                    }
                })
                /*PROVERBE*/
                .state('/category4_7', {
                    url: '/category4_7',
                    controller: 'ProverbeCtrl',
                    templateUrl: '/views/folder4/category4_7/category4_7.html',
                    resolve: {

                    }
                })
                    /*PROVERBE1*/
                    .state('/subcategory4_7_1', {
                        url: '/subcategory4_7_1',
                        controller: 'ProverbeCtrl',
                        templateUrl: '/views/folder4/category4_7/subcat_4_7_1.html',
                        resolve: {

                        }
                    })
                /*FACTS*/
                .state('/category4_8', {
                    url: '/category4_8',
                    controller: 'FactsCtrl',
                    templateUrl: '/views/folder4/category4_8/category4_8.html',
                    resolve: {

                    }
                })
            /*FOLOSITOARE*/
            .state('/folder5', {
                url: '/folder5',
                controller: 'FolositoareCtrl',
                templateUrl: '/views/folder5/folder5.html',
                resolve: {

                }
            })
                /*CONSTITUTIA ROMANIEI*/
                .state('/category5_1', {
                    url: '/category5_1',
                    controller: 'BookmarksCtrl',
                    templateUrl: '/views/folder5/category5_1/category5_1.html',
                    resolve: {

                    }
                })
                    /*CONSTITUTIA ROMANIEI 1*/
                    .state('/subcategory5_1_1', {
                        url: '/subcategory5_1_1',
                        controller: 'BookmarksCtrl',
                        templateUrl: '/views/folder5/category5_1/subcat_5_1_1.html',
                        resolve: {

                        }
                    })
                /*DREPTURILE OMULUI*/
                .state('/category5_2', {
                    url: '/category5_2',
                    controller: 'CodulPenalCtrl',
                    templateUrl: '/views/folder5/category5_2/category5_2.html',
                    resolve: {

                    }
                })
                    /*DREPTURILE OMULUI 1*/
                    .state('/subcategory5_2_1', {
                        url: '/subcategory5_2_1',
                        controller: 'CodulPenalCtrl',
                        templateUrl: '/views/folder5/category5_2/subcat_5_2_1.html',
                        resolve: {

                        }
                    });

        $urlRouterProvider.otherwise('/home');

        /*function loginRequired($q, $location, $auth) {
            var deferred = $q.defer();
            if ($auth.isAuthenticated()) {
                deferred.resolve();
            } else {
                $location.path('/login');
            }
            return deferred.promise;
        }*/
    });
