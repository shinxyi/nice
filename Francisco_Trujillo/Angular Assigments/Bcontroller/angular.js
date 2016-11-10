var appModule = angular.module('controller1',[]);

appModule.controller('divController', ['$scope',function($scope){
	$scope.food=[];
	
	$scope.addFood = function(){
		$scope.food.push($scope.nFood.name);
		$scope.nfood={};
	};
	
	console.log($scope.food.name)
}]);