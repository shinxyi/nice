var appModule = angular.module('app',[]);

appModule.controller('divController', function($scope){
	$scope.myName = ' Francisco';
	$scope.myFavoriteLanguage='JS';
	$scope.myFavoriteJSLibrary='Angular';
});
