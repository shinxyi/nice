app.controller('oneUserController', ['$scope', '$routeParams', 'usersFactory', 'dashFactory', '$location', '$cookies', function($scope, rParams, usersFactory, dashFactory, $location, $cookies) {
  console.log('CHECKING COOKIES vvv')
  console.log($cookies.get('user'));

  if(!($cookies.get('user'))){
    $location.url('/loginreg');
  }

  usersFactory.getOne(rParams.userId, function(returnedData){
    console.log(returnedData);
    $scope.user=returnedData;
  })

  $scope.logout = function(){
    dashFactory.logout(function(){
      $location.url('/loginreg');
    });
  };

}]);
