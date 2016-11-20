app.controller('acctController', ['$scope','usersFactory', '$location', function($scope, usersFactory, $location) {

  usersFactory.acct(function(user){
    $scope.user = user;
    console.log('TRYING TO SEE LOGGED IN USER');
    console.log($scope.user);

    if(!$scope.user){
      $location.url('/login');
    }
  });

  $scope.logout = function(){
    usersFactory.logout();
    $location.url('/login');
  }

}]);
