angular.module('home', [])
.controller('HomeCtrl', function($state, $log, $scope, $rootScope, $stateParams, UtilsFactory) {
	//$scope.user = UtilsFactory.getUser();

	$rootScope.username = window.localStorage.getItem('username');
	$log.debug($scope.username, 'user');
});