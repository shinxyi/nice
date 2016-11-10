var appModule = angular.module('controller1',[]);

appModule.controller('divController', ['$scope',function($scope){
	$scope.users=[];
	
	$scope.addUser = function(){
		$scope.users.push($scope.nUser);
		$scope.nUser={};
	};
	
	$scope.delUser = function(index){
		if(index === 0){
			$scope.users.shift();
		}
		else if(index===$scope.users.length-1){
			$scope.users.pop();
		}
		$scope.users.splice(index,index); //splice method removes a range of items from array. 
	

	};
}]);