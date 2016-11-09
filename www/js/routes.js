angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

  .state('thankYou', {
    url: '/thankYou',
    templateUrl: 'templates/thankYou.html',
    controller: 'thankYouCtrl'
  })
  .state('confirmation', {
    url: '/Confirmation',
    templateUrl: 'templates/confirmation.html',
    controller: 'confirmationCtrl'
  })

  .state('menu.vendorLogin', {
    url: '/Vendor-Login',
    views: {
      'side-menu21': {
        templateUrl: 'templates/vendorLogin.html',
        controller: 'vendorLoginCtrl'
      }
    }
  })
  .state('menu.myBooking', {
    url: '/My-Booking',
    views: {
      'side-menu21': {
        templateUrl: 'templates/myBooking.html',
        controller: 'myBookingCtrl'
      }
    }
  })
  
  .state('login', {
    url: '/login',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  .state('menu.boatDetails', {
    url: '/boatDetails',
    views: {
      'side-menu21': {
        templateUrl: 'templates/boatDetails.html',
        controller: 'boatDetailsCtrl'
      }
    }
  })
  .state('menu.myAccount', {
    url: '/My-Account',
    views: {
      'side-menu21': {
        templateUrl: 'templates/myAccount.html',
        controller: 'myAccountCtrl'
      }
    }
  })
  .state('menu.viewBoat', {
    url: '/View-Boat',
    views: {
      'side-menu21': {
        templateUrl: 'templates/viewBoat.html',
        controller: 'viewBoatCtrl'
      }
    }
  }) 

  .state('menu.servicesActivity', {
    url: '/Services-activity',
    views: {
      'side-menu21': {
        templateUrl: 'templates/servicesActivity.html',
        controller: 'servicesActivityCtrl'
      }
    }
  })    
  .state('menu.formDetails', {
    url: '/Form-details',
    views: {
      'side-menu21': {
        templateUrl: 'templates/formDetails.html',
        controller: 'formDetailsCtrl'
      }
    }
  }).state('menu.setLocations', {
    url: '/Set-Locations',
    views: {
      'side-menu21': {
        templateUrl: 'templates/setLocations.html',
        controller: 'setLocationsCtrl'
      }
    }
  })   

  .state('vendorDashboard', {
    url: '/Vendor-Dashboard',
    templateUrl: 'templates/vendorDashboard.html',
    controller: 'vendorDashboardCtrl'
  })

  .state('vendorRegister', {
    url: '/Vendor-Register',
    templateUrl: 'templates/vendorRegister.html',
    controller: 'vendorRegisterCtrl'
  })



  .state('menu', {
    url: '/side-menu21',
    templateUrl: 'templates/menu.html',
    controller: 'menuCtrl'
  })

$urlRouterProvider.otherwise('/login')

  

});