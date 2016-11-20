app.controller('dashController', ['$scope','dashFactory', '$location', '$cookies', function($scope, dashFactory, $location, $cookies) {
  console.log('CHECKING COOKIES vvv')
  console.log($cookies.get('user'));

  if(!($cookies.get('user'))){
    $location.url('/loginreg');
  }

  $scope.user = $cookies.get('user');

  dashFactory.categorize(function(returnedData){
    $scope.categorys = returnedData;
  })

  var index = function(){
    dashFactory.index(function(returnedData){
      $scope.topics = returnedData;
    })
  }

  index();

  $scope.logout = function(){
    dashFactory.logout(function(){
      $location.url('/loginreg');
    });
  };

  $scope.newTopic = function(){
    console.log('Trying to create new topic', $scope.info);
    dashFactory.newTopic($scope.info, function(returnedData){
      if(returnedData.errors){
        $scope.errors = returnedData.errors;
      }else{
        $scope.info ={};
        index();
      }
    })
  };

}]);
