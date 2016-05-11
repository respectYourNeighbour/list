angular.module('myAngularApp', ['satellizer', 'ui.router', 'toastr', 'ngRoute', 'ngSanitize',
        'RepeatController',
    'ListeCtrl',
    'MediaCtrl',
        'YoutubeCtrl',
        'MusicCtrl',
    'SufletMinteCtrl',
        'CitateCtrl',
            'CitateAristotelCtrl',
        'DevizeDeViataCtrl',
        'LozinciCtrl',
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
                        controller: 'ListaCartiCrestine',
                        templateUrl: '/views/folder2/category2_1/subcat_2_1_1.html',
                        resolve: {

                        }
                    })
                    /*INTERESANTE*/
                    .state('/subcategory2_1_2', {
                        url: '/subcategory2_1_2',
                        controller: 'ListaCartiInteresante',
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
                        controller: 'GifsFunnyCtrl',
                        templateUrl: '/views/folder3/category3_1/subcat_3_1_3.html',
                        resolve: {

                        }
                    })
                    /*INTERESTING*/
                    .state('/subcategory3_1_4', {
                        url: '/subcategory3_1_4',
                        controller: 'GifsInterestingCtrl',
                        templateUrl: '/views/folder3/category3_1/subcat_3_1_4.html',
                        resolve: {

                        }
                    })
                    /*WOW*/
                    .state('/subcategory3_1_5', {
                        url: '/subcategory3_1_5',
                        controller: 'GifsWowCtrl',
                        templateUrl: '/views/folder3/category3_1/subcat_3_1_5.html',
                        resolve: {

                        }
                    })
                    /*REACTION*/
                    .state('/subcategory3_1_6', {
                        url: '/subcategory3_1_6',
                        controller: 'GifsReactionCtrl',
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
                        controller: 'AbrahamLincolnCtrl',
                        templateUrl: '/views/folder4/category4_2/category4_2_1.html',
                        resolve: {

                        }
                    })
                    /*ALBERT EINSTEIN*/
                    .state('/category4_2_2', {
                        url: '/category4_2_2',
                        controller: 'AlbertEinsteinCtrl',
                        templateUrl: '/views/folder4/category4_2/category4_2_2.html',
                        resolve: {

                        }
                    })
                    /*ARISTOTEL*/
                    .state('/category4_2_3', {
                        url: '/category4_2_3',
                        controller: 'AristotelCtrl',
                        templateUrl: '/views/folder4/category4_2/category4_2_3.html',
                        resolve: {

                        }
                    })
                    /*BENJAMIN FRANKLIN*/
                    .state('/category4_2_4', {
                        url: '/category4_2_4',
                        controller: 'BenjaminFranklinCtrl',
                        templateUrl: '/views/folder4/category4_2/category4_2_4.html',
                        resolve: {

                        }
                    })
                    /*BUDDHA*/
                    .state('/category4_2_5', {
                        url: '/category4_2_5',
                        controller: 'BuddhaCtrl',
                        templateUrl: '/views/folder4/category4_2/category4_2_5.html',
                        resolve: {

                        }
                    })
                    /*Charles Dickens*/
                    .state('/category4_2_6', {
                        url: '/category4_2_6',
                        controller: 'CharlesDickensCtrl',
                        templateUrl: '/views/folder4/category4_2/category4_2_6.html',
                        resolve: {

                        }
                    })
                    /*Confucius*/
                    .state('/category4_2_7', {
                        url: '/category4_2_7',
                        controller: 'ConfuciusCtrl',
                        templateUrl: '/views/folder4/category4_2/category4_2_7.html',
                        resolve: {

                        }
                    })
                    /*Dalai Lama*/
                    .state('/category4_2_8', {
                        url: '/category4_2_8',
                        controller: 'DalaiLamaCtrl',
                        templateUrl: '/views/folder4/category4_2/category4_2_8.html',
                        resolve: {

                        }
                    })
                    /*Democrit*/
                    .state('/category4_2_9', {
                        url: '/category4_2_9',
                        controller: 'DemocritCtrl',
                        templateUrl: '/views/folder4/category4_2/category4_2_9.html',
                        resolve: {

                        }
                    })
                    /*Euripide*/
                    .state('/category4_2_10', {
                        url: '/category4_2_10',
                        controller: 'EuripideCtrl',
                        templateUrl: '/views/folder4/category4_2/category4_2_10.html',
                        resolve: {

                        }
                    })
                    /*George Bernard Shaw*/
                    .state('/category4_2_11', {
                        url: '/category4_2_11',
                        controller: 'GeorgeBernardShawCtrl',
                        templateUrl: '/views/folder4/category4_2/category4_2_11.html',
                        resolve: {

                        }
                    })
                    /*George Washington*/
                    .state('/category4_2_12', {
                        url: '/category4_2_12',
                        controller: 'GeorgeWashingtonCtrl',
                        templateUrl: '/views/folder4/category4_2/category4_2_12.html',
                        resolve: {

                        }
                    })
                    /*Immanuel Kant*/
                    .state('/category4_2_13', {
                        url: '/category4_2_13',
                        controller: 'ImmanuelKantCtrl',
                        templateUrl: '/views/folder4/category4_2/category4_2_13.html',
                        resolve: {

                        }
                    })
                    /*Lao Tzu*/
                    .state('/category4_2_14', {
                        url: '/category4_2_14',
                        controller: 'LaoTzuCtrl',
                        templateUrl: '/views/folder4/category4_2/category4_2_14.html',
                        resolve: {

                        }
                    })
                    /*Lucius Annaeus Seneca*/
                    .state('/category4_2_15', {
                        url: '/category4_2_15',
                        controller: 'LuciusAnnaeusSenecaCtrl',
                        templateUrl: '/views/folder4/category4_2/category4_2_15.html',
                        resolve: {

                        }
                    })
                    /*Mahatma Gandhi*/
                    .state('/category4_2_16', {
                        url: '/category4_2_16',
                        controller: 'MahatmaGandhiCtrl',
                        templateUrl: '/views/folder4/category4_2/category4_2_16.html',
                        resolve: {

                        }
                    })
                    /*Maica Tereza*/
                    .state('/category4_2_17', {
                        url: '/category4_2_17',
                        controller: 'MaicaTerezaCtrl',
                        templateUrl: '/views/folder4/category4_2/category4_2_17.html',
                        resolve: {

                        }
                    })
                    /*Mark Twain*/
                    .state('/category4_2_18', {
                        url: '/category4_2_18',
                        controller: 'MarkTwainCtrl',
                        templateUrl: '/views/folder4/category4_2/category4_2_18.html',
                        resolve: {

                        }
                    })
                    /*Martin Luther King Jr*/
                    .state('/category4_2_19', {
                        url: '/category4_2_19',
                        controller: 'MartinLutherKingJrCtrl',
                        templateUrl: '/views/folder4/category4_2/category4_2_19.html',
                        resolve: {

                        }
                    })
                    /*Napoleon Bonaparte*/
                    .state('/category4_2_20', {
                        url: '/category4_2_20',
                        controller: 'NapoleonBonaparteCtrl',
                        templateUrl: '/views/folder4/category4_2/category4_2_20.html',
                        resolve: {

                        }
                    })
                    /*Neale Donald Walsh*/
                    .state('/category4_2_21', {
                        url: '/category4_2_21',
                        controller: 'NealeDonaldWalshCtrl',
                        templateUrl: '/views/folder4/category4_2/category4_2_21.html',
                        resolve: {

                        }
                    })
                    /*Oscar Wilde*/
                    .state('/category4_2_22', {
                        url: '/category4_2_22',
                        controller: 'OscarWildeCtrl',
                        templateUrl: '/views/folder4/category4_2/category4_2_22.html',
                        resolve: {

                        }
                    })
                    /*Pablo Picasso*/
                    .state('/category4_2_23', {
                        url: '/category4_2_23',
                        controller: 'PabloPicassoCtrl',
                        templateUrl: '/views/folder4/category4_2/category4_2_23.html',
                        resolve: {

                        }
                    })
                    /*Platon*/
                    .state('/category4_2_24', {
                        url: '/category4_2_24',
                        controller: 'PlatonCtrl',
                        templateUrl: '/views/folder4/category4_2/category4_2_24.html',
                        resolve: {

                        }
                    })
                    /*Publilius Syrus*/
                    .state('/category4_2_25', {
                        url: '/category4_2_25',
                        controller: 'PubliliusSyrusCtrl',
                        templateUrl: '/views/folder4/category4_2/category4_2_25.html',
                        resolve: {

                        }
                    })
                    /*Ralph Waldo Emerson*/
                    .state('/category4_2_26', {
                        url: '/category4_2_26',
                        controller: 'RalphWaldoEmersonCtrl',
                        templateUrl: '/views/folder4/category4_2/category4_2_26.html',
                        resolve: {

                        }
                    })
                    /*Richard Wurmbrand*/
                    .state('/category4_2_27', {
                        url: '/category4_2_27',
                        controller: 'RichardWurmbrandCtrl',
                        templateUrl: '/views/folder4/category4_2/category4_2_27.html',
                        resolve: {

                        }
                    })
                    /*Sfantul Augustin*/
                    .state('/category4_2_28', {
                        url: '/category4_2_28',
                        controller: 'SfantulAugustinCtrl',
                        templateUrl: '/views/folder4/category4_2/category4_2_28.html',
                        resolve: {

                        }
                    })
                    /*Sfantul Ciprian*/
                    .state('/category4_2_29', {
                        url: '/category4_2_29',
                        controller: 'SfantulCiprianCtrl',
                        templateUrl: '/views/folder4/category4_2/category4_2_29.html',
                        resolve: {

                        }
                    })
                    /*Sfantul Ioan Gura De Aur*/
                    .state('/category4_2_30', {
                        url: '/category4_2_30',
                        controller: 'SfantulIoanGuraDeAurCtrl',
                        templateUrl: '/views/folder4/category4_2/category4_2_30.html',
                        resolve: {

                        }
                    })
                    /*Sfantul Ioan Scararul*/
                    .state('/category4_2_31', {
                        url: '/category4_2_31',
                        controller: 'SfantulIoanScararulCtrl',
                        templateUrl: '/views/folder4/category4_2/category4_2_31.html',
                        resolve: {

                        }
                    })
                    /*Sfantul Irineu*/
                    .state('/category4_2_32', {
                        url: '/category4_2_32',
                        controller: 'SfantulIrineuCtrl',
                        templateUrl: '/views/folder4/category4_2/category4_2_32.html',
                        resolve: {

                        }
                    })
                    /*Sfantul Petru*/
                    .state('/category4_2_33', {
                        url: '/category4_2_33',
                        controller: 'SfantulPetruCtrl',
                        templateUrl: '/views/folder4/category4_2/category4_2_33.html',
                        resolve: {

                        }
                    })
                    /*Simeon Noul Teolog*/
                    .state('/category4_2_34', {
                        url: '/category4_2_34',
                        controller: 'SfantulSimeonNoulTeologCtrl',
                        templateUrl: '/views/folder4/category4_2/category4_2_34.html',
                        resolve: {

                        }
                    })
                    /*Socrate*/
                    .state('/category4_2_35', {
                        url: '/category4_2_35',
                        controller: 'SfantulVasileCelMareCtrl',
                        templateUrl: '/views/folder4/category4_2/category4_2_35.html',
                        resolve: {

                        }
                    })
                    /*Steven Wright*/
                    .state('/category4_2_36', {
                        url: '/category4_2_36',
                        controller: 'SocrateCtrl',
                        templateUrl: '/views/folder4/category4_2/category4_2_36.html',
                        resolve: {

                        }
                    })
                    /*Sun Tzu*/
                    .state('/category4_2_37', {
                        url: '/category4_2_37',
                        controller: 'StevenWrightCtrl',
                        templateUrl: '/views/folder4/category4_2/category4_2_37.html',
                        resolve: {

                        }
                    })
                    /*Thomas Jefferson*/
                    .state('/category4_2_38', {
                        url: '/category4_2_38',
                        controller: 'SunTzuCtrl',
                        templateUrl: '/views/folder4/category4_2/category4_2_38.html',
                        resolve: {

                        }
                    })
                    /*Vasile Cel Mare*/
                    .state('/category4_2_39', {
                        url: '/category4_2_39',
                        controller: 'ThomasJeffersonCtrl',
                        templateUrl: '/views/folder4/category4_2/category4_2_39.html',
                        resolve: {

                        }
                    })
                    /*William Shakespeare*/
                    .state('/category4_2_40', {
                        url: '/category4_2_40',
                        controller: 'WilliamShakespeareCtrl',
                        templateUrl: '/views/folder4/category4_2/category4_2_40.html',
                        resolve: {

                        }
                    })
                    /*Winston Churchill*/
                    .state('/category4_2_41', {
                        url: '/category4_2_41',
                        controller: 'WinstonChurchillCtrl',
                        templateUrl: '/views/folder4/category4_2/category4_2_41.html',
                        resolve: {

                        }
                    })
                    /*Alte Citate*/
                    .state('/category4_2_42', {
                        url: '/category4_2_42',
                        controller: 'AlteCitateCtrl',
                        templateUrl: '/views/folder4/category4_2/category4_2_42.html',
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
