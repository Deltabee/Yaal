/* global angular, document, window */
angular.module('starter.controllers', [])

.controller('AppCtrl1', function($scope, $ionicModal, $ionicPopover, $timeout,  $location) {
	console.log(1);
})

.controller('AppCtrl', function($scope, $ionicModal, $ionicPopover, $timeout,  $location) {
    // Form data for the login modal
    $scope.loginData = {};

    var navIcons = document.getElementsByClassName('ion-navicon');
    for (var i = 0; i < navIcons.length; i++) {
        navIcons[i].addEventListener('click', function() {
            this.classList.toggle('active');
        });
    }

/*     var fab = document.getElementById('fab');
    fab.addEventListener('click', function() {
        return window && window.alert ? window.alert('you clicked the FAB!') : undefined;
    }); */

    // .fromTemplate() method
    var template =  '<ion-popover-view>' +
                    '   <ion-header-bar>' +
                    '       <h1 class="title">My Popover Title</h1>' +
                    '   </ion-header-bar>' +
                    '   <ion-content class="padding">' +
                    '       My Popover Contents' +
                    '   </ion-content>' +
                    '</ion-popover-view>';

    $scope.popover = $ionicPopover.fromTemplate(template, {
        scope: $scope
    });
    $scope.closePopover = function() {
        $scope.popover.hide();
    };
    //Cleanup the popover when we're done with it!
    $scope.$on('$destroy', function() {
        $scope.popover.remove();
    });
})

.controller('InkCtrl', function($scope, $stateParams, ionicMaterialInk) {
    ionicMaterialInk.displayEffect();
})

.controller('ComponentsCtrl', function($scope, $stateParams,  ionicMaterialInk) {
    ionicMaterialInk.displayEffect();

    // Toggle Code Wrapper
    var code = document.getElementsByClassName('code-wrapper');
    for (var i = 0; i < code.length; i++) {
        code[i].addEventListener('click', function() {
            this.classList.toggle('active');
        });
    }
})

.controller('ListsCtrl', function($scope, $stateParams,  ionicMaterialMotion) {

    var reset = function() {
        var inClass = document.querySelectorAll('.in');
        for (var i = 0; i < inClass.length; i++) {
            inClass[i].classList.remove('in');
            inClass[i].removeAttribute('style');
        }
        var done = document.querySelectorAll('.done');
        for (var j = 0; j < done.length; j++) {
            done[j].classList.remove('done');
            done[j].removeAttribute('style');
        }
        var ionList = document.getElementsByTagName('ion-list');
        for (var k = 0; k < ionList.length; k++) {
            var toRemove = ionList[k].className;
            if (/animate-/.test(toRemove)) {
                ionList[k].className = ionList[k].className.replace(/(?:^|\s)animate-\S*(?:$|\s)/, '');
            }
        }
    };

    $scope.ripple = function() {
        reset();
        document.getElementsByTagName('ion-list')[0].className += ' animate-ripple';
        setTimeout(function() {
            ionicMaterialMotion.ripple();
        }, 500);
    };

    $scope.fadeSlideInRight = function() {
        reset();
        document.getElementsByTagName('ion-list')[0].className += ' animate-fade-slide-in-right';
        setTimeout(function() {
            ionicMaterialMotion.fadeSlideInRight();
        }, 500);
    };

    $scope.fadeSlideIn = function() {
        reset();
        document.getElementsByTagName('ion-list')[0].className += ' animate-fade-slide-in';
        setTimeout(function() {
            ionicMaterialMotion.fadeSlideIn();
        }, 500);
    };

    $scope.blinds = function() {
        reset();
        document.getElementsByTagName('ion-list')[0].className += ' animate-blinds';
        setTimeout(function() {
            ionicMaterialMotion.blinds();
        }, 500);
    };

    $scope.blinds();

})

.controller('SetupCtrl', function($scope, $stateParams) {
    /* ionicMaterialMotion.pushDown({
        selector: '.push-down'
    });
    */
})

.controller('ExtensionsCtrl', function($scope, $stateParams, $ionicActionSheet, $timeout, $ionicLoading, $ionicModal, $ionicPopup,  ionicMaterialInk) {

    // Triggered on a button click, or some other target
    $scope.actionSheet = function() {

        // Show the action sheet
        var hideSheet = $ionicActionSheet.show({
            buttons: [{
                text: '<b>Share</b> This'
            }, {
                text: 'Move'
            }],
            destructiveText: 'Delete',
            titleText: 'Modify your album',
            cancelText: 'Cancel',
            cancel: function() {
                // add cancel code..
            },
            buttonClicked: function(index) {
                return true;
            }
        });

        // For example's sake, hide the sheet after two seconds
        $timeout(function() {
            hideSheet();
        }, 2000);

    };

    $scope.loading = function() {
        $ionicLoading.show({
            template: '<div class="loader"><svg class="circular"><circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="2" stroke-miterlimit="10"/></svg></div>'
        });

        // For example's sake, hide the sheet after two seconds
        $timeout(function() {
            $ionicLoading.hide();
        }, 2000);
    };

    $ionicModal.fromTemplateUrl('my-modal.html', {
        scope: $scope,
        animation: 'slide-in-up'
    }).then(function(modal) {
        $scope.modal = modal;
    });

    $scope.openModal = function() {
        $scope.modal.show();
        $timeout(function () {
            $scope.modal.hide();
        }, 2000);
    };
    // Cleanup the modal when we're done with it
    $scope.$on('$destroy', function() {
        $scope.modal.remove();
    });

    // Popover
    $scope.popover = function() {
        $scope.$parent.popover.show();
        $timeout(function () {
            $scope.$parent.popover.hide();
        }, 2000);
    };

    // Confirm
    $scope.showPopup = function() {
        var alertPopup = $ionicPopup.alert({
            title: 'You are now my subscribed to Cat Facts',
            template: 'You will meow receive fun daily facts about CATS!'
        });

        $timeout(function() {
            ionicMaterialInk.displayEffect();
        }, 0);
    };

    // Toggle Code Wrapper
    var code = document.getElementsByClassName('code-wrapper');
    for (var i = 0; i < code.length; i++) {
        code[i].addEventListener('click', function() {
            this.classList.toggle('active');
        });
    }
})

.controller('MotionCtrl', function($scope, $stateParams, $timeout,  ionicMaterialMotion, ionicMaterialInk) {
/*     var fab = document.getElementById('fab');

    $scope.moveFab = function(dir) {
        fab.style.display = 'none';
        fab.className = fab.className.replace('button-fab-top-left', '');
        fab.className = fab.className.replace('button-fab-top-right', '');
        fab.className = fab.className.replace('button-fab-bottom-left', '');
        fab.className = fab.className.replace('button-fab-bottom-right', '');
        fab.className += ' button-fab-' + dir;
        $timeout(function() {
            fab.style.display = 'block';
        }, 100);
    };

    $scope.motionFab = function(type) {
        var shouldAnimate = false;
        var classes = type instanceof Array ? type : [type];

        function toggleMotionClass (theClass) {
            $timeout(function() {
                fab.classList.toggle(theClass);
            }, 300);
        }

        for (var i = 0; i < classes.length; i++) {
            fab.classList.toggle(classes[i]);

            shouldAnimate = fab.classList.contains(classes[i]);
            if (shouldAnimate) {
                (toggleMotionClass)(classes[i]);
            }
        }
    }; */

    var reset = function() {
        var inClass = document.querySelectorAll('.in');
        for (var i = 0; i < inClass.length; i++) {
            inClass[i].classList.remove('in');
            inClass[i].removeAttribute('style');
        }
        var done = document.querySelectorAll('.done');
        for (var j = 0; j < done.length; j++) {
            done[j].classList.remove('done');
            done[j].removeAttribute('style');
        }
        var ionList = document.getElementsByTagName('ion-list');
        for (var k = 0; k < ionList.length; k++) {
            var toRemove = ionList[k].className;
            if (/animate-/.test(toRemove)) {
                ionList[k].className = ionList[k].className.replace(/(?:^|\s)animate-\S*(?:$|\s)/, '');
            }
        }
    };

    $scope.ripple = function() {
        reset();
        document.getElementsByTagName('ion-list')[0].className += ' animate-ripple';
        setTimeout(function() {
            ionicMaterialMotion.ripple();
        }, 500);
    };

    $scope.fadeSlideInRight = function() {
        reset();
        document.getElementsByTagName('ion-list')[0].className += ' animate-fade-slide-in-right';
        setTimeout(function() {
            ionicMaterialMotion.fadeSlideInRight();
        }, 500);
    };

    $scope.fadeSlideIn = function() {
        reset();
        document.getElementsByTagName('ion-list')[0].className += ' animate-fade-slide-in';
        setTimeout(function() {
            ionicMaterialMotion.fadeSlideIn();
        }, 500);
    };

    $scope.blinds = function() {
        reset();
        document.getElementsByTagName('ion-list')[0].className += ' animate-blinds';
        setTimeout(function() {
            ionicMaterialMotion.blinds();
        }, 500);
    };

    $scope.blinds();
    ionicMaterialInk.displayEffect();
})



.controller('loginCtrl', function($scope, $state, $stateParams, ionicMaterialInk,$ionicSideMenuDelegate) {
    ionicMaterialInk.displayEffect();
	$ionicSideMenuDelegate.canDragContent(false);
	
	$scope.$root.canDrag = false;

	$scope.error={};
	$scope.user={
		userName:'',
		userPass:''
	};
	//$(".pane").css({'background' : 'url("img/loginBg.jpg")','background-size' : '100%'});
	$(".pane").css({'background-image' : 'url("img/loginBg.jpg")','background-size' : '100%'});

	$scope.login=function(){
		$state.go('app.bookingConf');
	}
	$scope.signup=function(){
		$state.go('apps.regiseration');
	}
	$scope.forgotPass=function(){
		$state.go('apps.fPass');
	}
	
	

 
 })

.controller('regiserationCtrl', function($scope, $state, $stateParams, ionicMaterialInk,$ionicSideMenuDelegate, $http, $rootScope) {
    $scope.userDetails = {};
    ionicMaterialInk.displayEffect();
	$ionicSideMenuDelegate.canDragContent(false);
    
    $scope.signUpUser = function(){
        var name = $scope.userDetails.firstName+' '+$scope.userDetails.lastName;
        var email = $scope.userDetails.email;
        var pass = $scope.userDetails.pass;

        var apiUrl = $rootScope.api+"/user-register/?name="+name+"&email="+email+"&pass="+pass;

        $http({
            method: 'GET',
            url:  apiUrl
            }).then(function successCallback(response) {
                if (response.data.hasOwnProperty('error')) {
                    $scope.success = false;
                    $scope.error = response.data.error;
                    return;
                }
                $scope.error = false;
                $scope.success = response.data.success.message;

            }, function errorCallback(response) {
                console.log(response);
            });
    }
  
})

.controller('fPassCtrl', function($scope, $state, $stateParams, ionicMaterialInk,$ionicSideMenuDelegate, $rootScope, $http) {
    $scope.userDetails = {};
    ionicMaterialInk.displayEffect();
	$ionicSideMenuDelegate.canDragContent(false);

    $scope.forgetPass = function(){
        var email = $scope.userDetails.email;
        var apiUrl = $rootScope.api+"/forgot-password/?email="+email;

        $http({
            method: 'GET',
            url:  apiUrl
            }).then(function successCallback(response) {
                if (response.data.hasOwnProperty('reset_link')) {
                    $scope.error = false;
                    $scope.success = response.data.message;
                   return;
                }
                $scope.success = false;
                $scope.error = response.data.message;

            }, function errorCallback(response) {
                console.log(response);
            });
    }
})

.controller('selectActivityCtrl', function($scope, $rootScope, $timeout, $state, $stateParams, ionicMaterialInk,$ionicSideMenuDelegate) {
    ionicMaterialInk.displayEffect();
	$ionicSideMenuDelegate.canDragContent(true);
	
	if($rootScope.loading && $rootScope.loading < 1){	
		$rootScope.loading++;
		$('.loading').hide();
		$('.searchActivity').show();
		$('.bar-assertive').show();
	}else{		
		$rootScope.loading = 0;
		$('.loading').show();
		$('.searchActivity').hide();
		$('.bar-assertive').hide();		
		$timeout(function() {
			$rootScope.loading++;
			$('.loading').hide();
			$('.searchActivity').show();
			$('.bar-assertive').show();
		}, 1000);	
	}
	
    $scope.searchP = {
		selectCategory : [],
		selectDate : new Date(),
		selectAmenities : [],
		selectGroup : []
	};
	
	setTimeout(function(){ 
		console.log($scope.searchP);
	}, 3000);
	
	$scope.search=function(){
		$state.go('app.searchResult');
	};
	$scope.mainMenu=function(){
		$state.go('app.category');
	};
	
	
})

.controller('categoryCtrl', function($scope, $state, $stateParams, ionicMaterialInk, $rootScope, $http) {
    ionicMaterialInk.displayEffect();
        var date = new Date();
        var month = parseInt(date.getMonth())+parseInt('1');
        var year = date.getFullYear();

        $scope.date =  date.getDate()+'-'+month+'-'+year;
        $scope.categories = [];
        var apiUrl = $rootScope.api+'activity';
    	 $http({
            method: 'GET',
            url:  apiUrl
            }).then(function successCallback(response) {
                
                if (response.data.hasOwnProperty('error')) {
                    $scope.error = false;
                    $scope.success = response.data.message;
                   return;
                }
                $scope.categories = response.data.AllActivties;
                $scope.imgConatiner = response.data.image_container;
            }, function errorCallback(response) {
                console.log(response);
        });
})

.controller('searchResultCtrl', function($scope, $state, $stateParams, ionicMaterialMotion, ionicMaterialInk, $rootScope, $http) {
    ionicMaterialInk.displayEffect();
	ionicMaterialMotion.ripple();
	
    var date = $stateParams.date;
    var activity = $stateParams.activity;
    var amenity = $stateParams.amenity;
    var type = $stateParams.type;

	$scope.yaals = [];
        var apiUrl = $rootScope.api+'search?date='+date+'&activity='+activity+'&amenity='+amenity+'&type='+type+'';
         $http({
            method: 'GET',
            url:  apiUrl
            }).then(function successCallback(response) {
             
                if (response.data.hasOwnProperty('error')) {
                    $scope.error = response.data.error;
                   return;
                }
                var result = response.data.search_result;
                $scope.imgConatiner = response.data.image_container;
                var log = [];
                angular.forEach(result, function(value, key){
                   var img = value.img_path.split(',');
                   value.img = img[0];
                   if(value.addon_activity!=''){
                        value.addon_activity = JSON.parse(value.addon_activity);
                    }else{
                        value.addon_activity = [];
                    }
                   

                   log.push(value);
                });
                $scope.yaals = log;
            }, function errorCallback(response) {
                console.log(response);
        });

        $scope.gotToDetail = function(){

            $state.go('app.searchDetail');
        }
})

.controller('searchDetailCtrl', function($scope, $state, $stateParams, ionicMaterialMotion, ionicMaterialInk, $rootScope, $http) {
    ionicMaterialInk.displayEffect();


	$("[id ^= 'imgSlider']").owlCarousel({
		navigation : true,
		slideSpeed : 300,
		paginationSpeed : 400,
		singleItem : true,
		navigation : false
	});
	var slug = $stateParams.slug;

    var apiUrl = $rootScope.api+'marine/'+slug;
         $http({
            method: 'GET',
            url:  apiUrl
            }).then(function successCallback(response) {
                if (response.data.hasOwnProperty('error')) {
                    $scope.error = response.data.error;
                   return;
                }
               
                $scope.marine = response.data.marine;
                $scope.marine.free_service = [];
                $scope.marine.paid_service = [];
                $scope.marine.free_activity = [];
                $scope.marine.paid_activity = [];

                if (response.data.marine.addon_activity!='') {

                    var addon_activity = JSON.parse(response.data.marine.addon_activity);
                    angular.forEach(addon_activity, function(value, key){

                        if (value==0) {
                            $scope.marine.free_activity.push({activity: key});
                        }else{
                            $scope.marine.paid_activity.push({activity: key,  price: value});
                        }
                        
                    });
                }

                if (response.data.marine.sub_activity!='') {

                    var addon_service = JSON.parse(response.data.marine.sub_activity);
                    angular.forEach(addon_service, function(value, key){

                        if (value==0) {
                            $scope.marine.free_service.push({service: key});
                        }else{
                            $scope.marine.paid_service.push({service: key, price: value});
                        }

                    });
                    
                }
               
                
                $scope.marine.destination =  response.data.marine.destination.split(',');
                $scope.imgConatiner = response.data.image_container;
                
                var img = response.data.marine.img.split(',');
                
                var log = [];
                angular.forEach(img, function(value, key){
                  
                   value.img = img[key];
                   log.push(value);
                });
                
                $scope.marineImages  = log;
               console.log(log);
            }, function errorCallback(response) {
                console.log(response);
        });

	$scope.booknow = function(){
		$state.go('app.adrBill');
	}
	

})

.controller('homeCtrl', function($scope, $state, $stateParams, ionicMaterialInk) {
    ionicMaterialInk.displayEffect();
})

.controller('personalInfoCtrl', function($scope, $state, $stateParams, ionicMaterialInk) {
    ionicMaterialInk.displayEffect();
})

.controller('changePasswordCtrl', function($scope, $state, $stateParams, ionicMaterialInk) {
    ionicMaterialInk.displayEffect();
	$scope.changePassword=function(){
	
	}
})

.controller('adrsCtrl', function($scope, $state, $stateParams, ionicMaterialInk) {
    ionicMaterialInk.displayEffect();
	$scope.addressSubmit=function(){
		
	}
})

.controller('adrBillCtrl', function($scope, $state, $stateParams, ionicMaterialInk) {
    ionicMaterialInk.displayEffect();
	$scope.booknow=function(){
		$state.go('apps.login');
	}
})

.controller('bookingConfCtrl', function($scope, $state, $stateParams, ionicMaterialInk) {
    ionicMaterialInk.displayEffect();

})

.controller('myTripCtrl', function($scope, $state, $stateParams, ionicMaterialMotion, ionicMaterialInk) {
    ionicMaterialInk.displayEffect();
	ionicMaterialMotion.ripple();
	$scope.writeReview = function(){
		$state.go('app.reviewPage');
	}
})

.controller('reviewPageCtrl', function($scope, $state, $stateParams, ionicMaterialInk) {
    ionicMaterialInk.displayEffect();
	$scope.writeReview = function(){
		$state.go('app.reviewPage');
	}
})//reviewPage

.controller('contactUs', function($scope, $state, $stateParams, ionicMaterialInk) {
    ionicMaterialInk.displayEffect();
})

.controller('faqCtrl', function($scope, $state, $stateParams, ionicMaterialInk) {
    ionicMaterialInk.displayEffect();
})

.controller('privacyPolicyCtrl', function($scope, $state, $stateParams, ionicMaterialInk) {
    ionicMaterialInk.displayEffect();
})

.controller('logoutCtrl', function($scope, $state, $stateParams, ionicMaterialInk, $location) {
    ionicMaterialInk.displayEffect();

    $scope.doLogout = function(){
        window.localStorage.removeItem('user');
        window.location.href =$location.protocol()+'://'+$location.host()+':'+$location.port();
    }

})



;
