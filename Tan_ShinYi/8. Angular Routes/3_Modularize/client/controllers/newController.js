app.controller('newController', ['$scope','userFactory', '$location', function($scope, userFactory, $location) {
  $scope.addUser = function(){
    userFactory.create($scope.info);
    $scope.redirect();
  }

  $scope.redirect = function(){
    $location.url('/index');
  }

}]);
