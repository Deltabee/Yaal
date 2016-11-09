var yaal = angular.module('starter.controllers', []);
yaal.controller('AppCtrl', function($rootScope, $scope, $ionicModal, $timeout) {
	$rootScope.api = "http://yaal.technofox.co.in/api/";
	window.localStorage.setItem( 'api', 'http://yaal.technofox.co.in/api/' );
});

yaal.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
});

yaal.controller('PlaylistCtrl', function($scope, $stateParams) {
});

yaal.controller('PaymentTwoCtrl', function($scope) {
    $scope.tab = 1;

    $scope.setTab = function(newTab){
      $scope.tab = newTab;
    };

    $scope.isSet = function(tabNum){
      return $scope.tab === tabNum;
    };
});

yaal.controller('SelectActCtrl', function($scope, $rootScope, $ionicModal, $timeout, $http,$state) {
	$rootScope.api = window.localStorage.getItem('api');

    $scope.searchP = {
		selectCategory : [],
		selectDate : new Date(),
		selectAmenities : [],
		selectGroup : []
	};
	
  	$http({
		method: 'GET',
		url:  $rootScope.api+"search_box"
	}).then(function successCallback(response) {
		$scope.error = response.data.error;
		$scope.data = response.data;
		//console.log(response.data);
	}, function errorCallback(response) {
		$scope.error = response.data;
		//console.log(response.data);
	});
	
	$scope.search = function(){
		if($scope.searchP.selectCategory.length  > 0 && $scope.searchP.selectAmenities.length > 0 && $scope.searchP.selectGroup.length > 0 ){
		 	var date = $scope.searchP.selectDate.getDate()+'-'+ (1+$scope.searchP.selectDate.getMonth())+'-'+$scope.searchP.selectDate.getFullYear();
			$rootScope.searchP = {
				selectCategory : $scope.searchP.selectCategory,
				selectDate : date,
				selectAmenities : $scope.searchP.selectAmenities,
				selectGroup : $scope.searchP.selectGroup
			};
			
			window.localStorage.setItem('searchCriteria', JSON.stringify($rootScope.searchP));
			//console.log(window.localStorage.getItem('searchCriteria'));
			$state.go('app.vendor');
		}
	}
});

yaal.controller('VendorCtrl', function($scope, $rootScope, $ionicModal, $timeout, $http,$state) {
	//console.log(angular.fromJson(window.localStorage.getItem('searchCriteria')));
    $scope.searchP = {
		selectCategory : [],
		selectDate : new Date(),
		selectAmenities : [],
		selectGroup : []
	};
	
	$scope.searchP = angular.fromJson(window.localStorage.getItem('searchCriteria'));
	//console.log('**********',$rootScope);
	$rootScope.api = window.localStorage.getItem('api');
	
	if($rootScope.searchP){
		if($rootScope.searchP.selectCategory || $rootScope.searchP.selectAmenities){
			$http({
				method: 'GET',
				//url: 'http://yaal.technofox.co.in/api/search?date=7-9-2016&activity=3&amenities=3'
				url:  $rootScope.api+"search?date="+$rootScope.searchP.selectDate+"&activity="+$rootScope.searchP.selectCategory+"&amenities="+$rootScope.searchP.selectAmenities
			}).then(function successCallback(response) {
				$scope.error = response.data.error;
				$scope.data = response.data;
				$scope.searchResult = response.data.search_result;
				if($scope.searchResult.length > 0){
					$scope.recordFound=true;
				}else{
					$scope.recordFound=false;
				}
				$scope.imageContainer = response.data.image_container;
				$scope.activities = response.data.activities;
			}, function errorCallback(response) {
				$scope.error = response.data;
				console.log(response.data);
			});
		}
	}else{
		$state.go('app.selectact');
	}
	
	
	$scope.openProduct = function(slug){
		//console.log(slug);
		if(slug){
			$rootScope.selectedMarineSlug = slug;
			window.localStorage.setItem('selectedMarineSlug', slug);
			$state.go('app.product');
		}
	};
});

//ViewProductsCtrl
yaal.controller('ViewProductsCtrl', function($scope, $rootScope, $ionicModal, $timeout, $http,$state) {

    $scope.searchP = {
		selectCategory : [],
		selectDate : new Date(),
		selectAmenities : [],
		selectGroup : []
	};
	
	$rootScope.api = window.localStorage.getItem('api');
	$rootScope.selectedMarineSlug = window.localStorage.getItem('selectedMarineSlug');
	
	//$rootScope.selectedMarineSlug = 'marine-3';
	if($rootScope.selectedMarineSlug){
		$http({
			method: 'GET',
			url: $rootScope.api+'marine/'+$rootScope.selectedMarineSlug
		}).then(function successCallback(response) {
			var data = response.data
			if(typeof(data) == 'string'){
				var data = data.substring(5);
				data = angular.fromJson(data);
				response.data = data;
			}
			
			$scope.searchP = angular.fromJson(window.localStorage.getItem('searchCriteria'));
			console.log($scope.searchP.selectGroup);
			
			$scope.error = response.data.error;
			$scope.categoryData = response.data;
			//console.log(response);
			
			$scope.imageArr=[];
			$scope.imageStr=response.data.marine.img_path;
			$scope.imageArr = $scope.imageStr.split(',');
			$scope.port = response.data.ports;
			
			
			$scope.loadMap();
      
		}, function errorCallback(response) {
			$scope.error = response.data;
			console.log(response.data);
		});
	}else{
			$state.go('app.selectact');	
	}
	
	$scope.loadMap =function(){
			function initialize() {
				var myLatlng={};
				var mark={};
				angular.forEach($scope.port, function(value, key) {
					myLatlng = new google.maps.LatLng(value.lattitute,value.longtitute);
					mark.lat = parseFloat(value.lattitute);
					mark.lng = parseFloat(value.longtitute);
				});
				console.log(mark);
				var mapOptions = {
					center: myLatlng,
					zoom: 10,
					markers:mark,
					mapTypeId: google.maps.MapTypeId.ROADMAP
				};
				var map = new google.maps.Map(document.getElementById("map"),mapOptions);
				//Marker + infowindow + angularjs compiled ng-click
				var contentString = "<div>"+$scope.port.port_name+"</div>";
				var compiled = $compile(contentString)($scope);
				var infowindow = new google.maps.InfoWindow({
					content: compiled[0]
				});
				var marker = new google.maps.Marker({
					position: myLatlng,
					map: map,
					title: 'Demo'
				});
				google.maps.event.addListener(marker, 'click', function() {
					infowindow.open(map,marker);
				});
				$scope.map = map;
			}
			
			
      google.maps.event.addDomListener(window, 'load', initialize);
	  
			$scope.centerOnMe = function() {
				if(!$scope.map) {
					return;
				}

				$scope.loading = $ionicLoading.show({
					content: 'Getting current location...',
					showBackdrop: false
				});

				navigator.geolocation.getCurrentPosition(function(pos) {
					$scope.map.setCenter(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
					$scope.loading.hide();
				}, function(error) {
					alert('Unable to get location: ' + error.message);
				});
			};

			$scope.clickTest = function() {
				alert('Example of infowindow with ng-click')
			};
		
		//setTimeout(function(){ alert("Hello"); }, 3000);
		setTimeout(function(){
			$("#slider").owlCarousel({
				navigation : true,
				slideSpeed : 1000,
				paginationSpeed : 400,
				singleItem : true,
				margin:0,
				autoPlay : true,
				// "singleItem:true" is a shortcut for:
				// items : 1, 
				// itemsDesktop : false,
				// itemsDesktopSmall : false,
				// itemsTablet: false,
				// itemsMobile : false
			});
		},20)
	};
	
 	$scope.bookNow = function(){
		if(window.localStorage.getItem('user')){
			$scope.user = angular.fromJson(window.localStorage.getItem('api'));
			$state.go('app.selectact');
		}else{
			$state.go('app.login');
		} 
	}; 
});

yaal.controller('LoginCtrl', function($scope,$rootScope, $ionicModal, $timeout,$state,$http) {
	if(window.localStorage.getItem('user')){
		$scope.user = angular.fromJson(window.localStorage.getItem('api'));
		$state.go('app.selectact');
	}
	else{
		$scope.user={
			username:'',
			password:''
		};
			
		$scope.login = function(){
			$http({
			method: 'GET',
			url:  $rootScope.api+"/user-login/?email="+$scope.user.userName+"&pass="+$scope.user.password
			}).then(function successCallback(response) {
				$scope.error = response.data.error;
				window.localStorage.setItem('user', JSON.stringify(user));
			}, function errorCallback(response) {
				$scope.error = response.data;
				console.log(response.data);
			});
		}
	}

});

yaal.controller('SignupCtrl', function($scope,$rootScope, $ionicModal, $timeout,$state,$http) {
	$scope.msg = "SignupCtrl";
	$scope.reg={
		name:'',
		email:'',
		pass:'',
		rePass:''
	};
	$scope.register = function(){
		if(($scope.reg.pass == $scope.reg.rePass)){
			$http({
			method: 'GET',
			url:  $rootScope.api+"/user-register/?name="+$scope.reg.name+"&email="+$scope.reg.email+"&pass="+$scope.reg.pass
			}).then(function successCallback(response) {
				if(response.data.success.message){
					alert(response.data.success.message);
					$state.go('app.login');
				};
				$scope.error = response.data.error;
			}, function errorCallback(response) {
				$scope.error = response.data;
				console.log(response.data);
			});	
		}
		else{
			$scope.error = "password not matched!!";
		}
	}
});

yaal.controller('ForgotpassCtrl', function($scope,$rootScope, $ionicModal, $timeout,$state,$http) {
	$scope.msg = "ForgotpassCtrl";
	$scope.user={
		email:''
	};
	$scope.submit = function(){
		$http({
		method: 'GET',
		url:  $rootScope.api+"/forgot-password?email="+$scope.user.email
		}).then(function successCallback(response) {
			if(response.data.message){
				alert(response.data.message);
				$state.go('app.login');
			};
			$scope.error = response.data.error;
		}, function errorCallback(response) {
			$scope.error = response.data;
			console.log(response.data);
		});
	}
});



yaal.controller('CategoryCtrl', function($scope, $rootScope, $ionicModal, $timeout, $http,$state) {
	$rootScope.api = window.localStorage.getItem('api');
		$scope.category={
			categoryData:{},
			imgUrl:''
		}
  	$http({
		method: 'GET',
		url: $rootScope.api+'activity'
	}).then(function successCallback(response) {
		$scope.error = response.data.error;
		
		angular.forEach(response.data, function(value, key) {
			if(key =='All-Activties'){
				$scope.category.categoryData = value;
			}else if(key == 'image_container'){
				$scope.category.imgUrl = value;			
			}
		});
		
		
	}, function errorCallback(response) {
		$scope.error = response.data;
	});
	
	$scope.catDetails= function(catSlug){
		window.localStorage.setItem('catSlug', catSlug);
		$state.go('app.categoryDetail');
	}
});

//CategoryDtlCtrl
yaal.controller('CategoryDtlCtrl', function($scope, $rootScope, $ionicModal, $timeout, $http,$state) {
	$rootScope.api = window.localStorage.getItem('api');
	$rootScope.catSlug = window.localStorage.getItem('catSlug');
 	$scope.category={
		catName:$rootScope.catSlug,
		categoryData:{}
	};
	
  	$http({
		method: 'GET',
		url: $rootScope.api+'activity/'+$rootScope.catSlug
	}).then(function successCallback(response) {
		$scope.error = response.data.error;
		$scope.category.categoryData = response.data.marines;
		console.log($scope.categoryData);
		$scopeloadSlider();
	}, function errorCallback(response) {
		$scope.error = response.data;
		console.log(response.data);
	});
	
	$scopeloadSlider =function(){
	/* 	$scope.imageStr=response.data.marine.img_path;
		$scope.imageArr = $scope.imageStr.split(',');
 */
 
	//response.data.marines
	$scope.imgArr=[];
		angular.forEach($scope.category.categoryData, function(val, ke) {
			$scope.imgObj={imageArr:[],imageCard:''}
			$scope.imgObj.imageCard = val.name
			$scope.imgObj.imageArr = val.img_path.split(',');
			$scope.imgArr.push($scope.imgObj);
			console.log($scope.imgArr);
		});
	
	
		setTimeout(function(){
			$("[id ^= 'CategoryDtlSlider']").owlCarousel({
				navigation : true,
				slideSpeed : 1000,
				paginationSpeed : 400,
				singleItem : true,
				margin:0,
				autoPlay : true,
				// "singleItem:true" is a shortcut for:
				// items : 1, 
				// itemsDesktop : false,
				// itemsDesktopSmall : false,
				// itemsTablet: false,
				// itemsMobile : false
			});
		},20)
	}
});




