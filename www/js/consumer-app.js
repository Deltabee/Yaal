// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($ionicConfigProvider) {
$ionicConfigProvider.backButton.text('Go Back').icon('ion-chevron-left');
$ionicConfigProvider.navBar.alignTitle("center"); //Places them at the bottom for all OS
$ionicConfigProvider.tabs.position("bottom"); //Places them at the bottom for all OS
$ionicConfigProvider.tabs.style("standard"); //Makes them all look the same across all OS
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'ctemplates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.notification', {
    url: '/notification',
    views: {
      'menuContent': {
        templateUrl: 'ctemplates/notification.html'
      }
    }
  })

  .state('app.messages', {
      url: '/messages',
      views: {
        'menuContent': {
          templateUrl: 'ctemplates/messages.html'
        }
      }
    })

  .state('app.booking', {
      url: '/booking',
      views: {
        'menuContent': {
          templateUrl: 'ctemplates/booking.html'
        }
      }
    })
  .state('app.selectact', {
      url: '/selectact',
      views: {
        'menuContent': {
          templateUrl: 'ctemplates/selectactivity.html'
        }
      }
    })

  //extra one
   .state('app.signup', {
      url: '/signup',
      views: {
        'menuContent': {
          templateUrl: 'ctemplates/signup.html'
        }
      }
    })
   
   .state('app.category', {
      url: '/category',
      views: {
        'menuContent': {
          templateUrl: 'ctemplates/category.html'
        }
      }
    })

     .state('app.product', {
      url: '/product',
      views: {
        'menuContent': {
          templateUrl: 'ctemplates/viewproducts.html'
        }
      }
    })

   .state('app.load', {
      url: '/load',
      views: {
        'menuContent': {
          templateUrl: 'ctemplates/load.html'
        }
      }
    })

   // Extra inner pages
   .state('app.categoryDetail', {
      url: '/categoryDetail',
      views: {
        'menuContent': {
          templateUrl: 'ctemplates/categoryDetail.html'
        }
      }
    })

   .state('app.paymentOne', {
      url: '/paymentOne',
      views: {
        'menuContent': {
          templateUrl: 'ctemplates/paymentOne.html'
        }
      }
    })
   .state('app.paymentTwo', {
      url: '/paymentTwo',
      views: {
        'menuContent': {
          templateUrl: 'ctemplates/paymentTwo.html',
          controller:'PaymentTwoCtrl'
        }
      }
    })
   .state('app.paymentThree', {
      url: '/paymentThree',
      views: {
        'menuContent': {
          templateUrl: 'ctemplates/paymentThree.html'
        }
      }
    })

   .state('app.vendor', {
      url: '/vendor',
      views: {
        'menuContent': {
          templateUrl: 'ctemplates/vendor.html'
        }
      }
    })

    .state('app.playlists', {
      url: '/playlists',
      views: {
        'menuContent': {
          templateUrl: 'ctemplates/playlists.html',
          controller: 'PlaylistsCtrl'
        }
      }
    })

  .state('app.single', {
    url: '/playlists/:playlistId',
    views: {
      'menuContent': {
        templateUrl: 'ctemplates/playlist.html',
        controller: 'PlaylistCtrl'
      }
    }
  })

  .state('app.login', {
      url: '/login',
      views: {
        'menuContent': {
          templateUrl: 'ctemplates/login.html'
        }
      }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/selectact');
});
