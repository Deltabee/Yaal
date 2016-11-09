// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'ionic-material', 'starter.controllers'])

.run(function($ionicPlatform, $rootScope) {
    $rootScope.api = 'http://yaal.technofox.co.in/api/';
    $ionicPlatform.ready(function() {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }
        if (window.StatusBar) {
            // org.apache.cordova.statusbar required
            StatusBar.styleDefault();
        }
    });
})

.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider

    .state('apps', {
        url: '/apps',
        templateUrl: 'templates/menu1.html'
    })
	
    .state('app', {
        url: '/app',
        abstract: true,
        templateUrl: 'templates/menu.html',
        controller: 'AppCtrl'
    })

    .state('app.lists', {
        url: '/lists',
        views: {
            'menuContent': {
                templateUrl: 'templates/lists.html',
                controller: 'ListsCtrl'
            }
        }
    })

    .state('app.ink', {
        url: '/ink',
        views: {
            'menuContent': {
                templateUrl: 'templates/ink.html',
                controller: 'InkCtrl'
            }
        }
    })

    .state('app.motion', {
        url: '/motion',
        views: {
            'menuContent': {
                templateUrl: 'templates/motion.html',
                controller: 'MotionCtrl'
            }
        }
    })

    .state('app.components', {
        url: '/components',
        views: {
            'menuContent': {
                templateUrl: 'templates/components.html',
                controller: 'ComponentsCtrl'
            }
        }
    })

    .state('app.extensions', {
        url: '/extensions',
        views: {
            'menuContent': {
                templateUrl: 'templates/extensions.html',
                controller: 'ExtensionsCtrl'
            }
        }
    })
	
	
/* --------------------------------------------------------------- NEW PAGES --------------------------------------------------------------- */

	
    .state('app.selectActivity', {
        url: '/selectActivity',
        views: {
            'menuContent': {
                templateUrl: 'templates/selectActivity.html',
                controller: 'selectActivityCtrl'
            }
        }
    })
	
	
    .state('apps.login', {
        url: '/login',
        views: {
            'menuContent': {
                templateUrl: 'templates/login.html',
                controller: 'loginCtrl'
            }
        }
    })
	
    .state('apps.regiseration', {
        url: '/regiseration',
        views: {
            'menuContent': {
                templateUrl: 'templates/regiseration.html',
                controller: 'regiserationCtrl'
            }
        }
    })

    .state('apps.fPass', {
        url: '/fPass',
        views: {
            'menuContent': {
                templateUrl: 'templates/fPass.html',
                controller: 'fPassCtrl'
            }
        }
    })
	
    .state('app.searchResult', {
        url: '/searchResult/:date/:activity/:amenity/:type',
        views: {
            'menuContent': {
                templateUrl: 'templates/searchResult.html',
                controller: 'searchResultCtrl'
            },
        params :{

                date: null,
                activity: null,
                amenity: null,
                type: null
            }
        }
    })
	
    .state('app.searchDetail', {
        url: '/searchDetail/:slug',
        views: {
            'menuContent': {
                templateUrl: 'templates/searchDetail.html',
                controller: 'searchDetailCtrl'
            },
        params: {
                slug: null
            }
        }
    })
	
    .state('app.category', {
        url: '/category',
        views: {
            'menuContent': {
                templateUrl: 'templates/category.html',
                controller: 'categoryCtrl'
            }
        }
    })
	
    .state('app.adrBill', {
        url: '/adrBill',
        views: {
            'menuContent': {
                templateUrl: 'templates/adrBill.html',
                controller: 'adrBillCtrl'
            }
        }
    })
	
    .state('app.bookingConf', {
        url: '/bookingConf',
        views: {
            'menuContent': {
                templateUrl: 'templates/bookingConf.html',
                controller: 'bookingConfCtrl'
            }
        }
    })

    .state('app.home', {
        url: '/home',
        views: {
            'menuContent': {
                templateUrl: 'templates/home.html',
                controller: 'homeCtrl'
            }
        }
    })

    .state('app.personalInfo', {
        url: '/personalInfo',
        views: {
            'menuContent': {
                templateUrl: 'templates/personalInfo.html',
                controller: 'personalInfoCtrl'
            }
        }
    })

    .state('app.changePassword', {
        url: '/changePassword',
        views: {
            'menuContent': {
                templateUrl: 'templates/changePassword.html',
                controller: 'changePasswordCtrl'
            }
        }
    })

    .state('app.adrs', {
        url: '/adrs',
        views: {
            'menuContent': {
                templateUrl: 'templates/adrs.html',
                controller: 'adrsCtrl'
            }
        }
    })

    .state('app.myTrip', {
        url: '/myTrip',
        views: {
            'menuContent': {
                templateUrl: 'templates/myTrip.html',
                controller: 'myTripCtrl'
            }
        }
    })

    .state('app.reviewPage', {
        url: '/reviewPage',
        views: {
            'menuContent': {
                templateUrl: 'templates/reviewPage.html',
                controller: 'reviewPageCtrl'
            }
        }
    })

    .state('app.contactUs', {
        url: '/contactUs',
        views: {
            'menuContent': {
                templateUrl: 'templates/contactUs.html',
                controller: 'contactUs'
            }
        }
    })

    .state('app.faq', {
        url: '/faq',
        views: {
            'menuContent': {
                templateUrl: 'templates/faq.html',
                controller: 'faqCtrl'
            }
        }
    })

    .state('app.privacyPolicy', {
        url: '/privacyPolicy',
        views: {
            'menuContent': {
                templateUrl: 'templates/privacyPolicy.html',
                controller: 'privacyPolicyCtrl'
            }
        }
    })

    .state('app.logout', {
        url: '/logout',
        views: {
            'menuContent': {
                templateUrl: 'templates/logout.html',
                controller: 'logoutCtrl'
            }
        }
    })	
	
	
    ;

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/app/selectActivity');
});
