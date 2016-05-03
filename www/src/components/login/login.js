angular.module('login', [])
.controller('LoginCtrl', function($state, $log, $scope, $stateParams, UtilsFactory) {
	$scope.doLogin = function(loginData) {		
		if (angular.isUndefined(loginData) || angular.isUndefined(loginData.username) || loginData.username == null || loginData.username == ''
			|| angular.isUndefined(loginData.password) || loginData.password == null || loginData.username == '') {

			alert('Please Enter Username and password');
			//ionicToast.show("Please Enter Username and password", 'top', false, 5000);
		} else {
			//UtilsFactory.setUser(loginData);
			window.localStorage.setItem('username', loginData.username);
    		$state.go('app.home');
		}
	};
});