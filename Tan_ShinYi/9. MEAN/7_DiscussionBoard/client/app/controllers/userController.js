app.controller('userController', ['$scope','usersFactory', '$location', '$cookies', function($scope, usersFactory, $location, $cookies) {
  console.log('CHECKING COOKIES vvv')
  console.log($cookies.get('user'));

  if(($cookies.get('user'))){
    $location.url('/dashboard');
  }

  $scope.login = function(){
    usersFactory.login($scope.info, function(returnedData){
      if(returnedData.errors){
        $scope.errors = returnedData.errors;
      }else{
        $location.url('/dashboard');
      }
    })
  };

  $scope.reg = function(){
    usersFactory.create($scope.regInfo, function(returnedData){
      if(returnedData.errors){
        $scope.errors2 = returnedData.errors;
      }else{
        $location.url('/dashboard');
      }
    })
  };

}]);
