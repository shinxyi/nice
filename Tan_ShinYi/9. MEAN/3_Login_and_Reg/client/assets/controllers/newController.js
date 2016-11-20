app.controller('newController', ['$scope','usersFactory', '$location', function($scope, usersFactory, $location) {

  usersFactory.acct(function(user){
    $scope.user = user;
    console.log('TRYING TO SEE LOGGED IN USER');
    console.log($scope.user);

    if($scope.user){
      $location.url('/success');
    }
  });

  $scope.reg = function(){
    usersFactory.create($scope.info, function(returnedData){
      if(returnedData.errors){
        $scope.errors = returnedData.errors;
      }else{
        $location.url('/success');
      }
    })
  };

  $scope.login = function(){
    usersFactory.login($scope.info, function(returnedData){
      if(returnedData.errors){
        $scope.errors = returnedData.errors;
      }else{
        $location.url('/success');
      }
    })
  }

}]);
