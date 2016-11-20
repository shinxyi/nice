app.controller('topicController', ['$scope', '$routeParams', 'dashFactory', '$location', '$cookies', function($scope, rParams, dashFactory, $location, $cookies) {
  console.log('CHECKING COOKIES vvv')
  console.log($cookies.get('user'));

  if(!($cookies.get('user'))){
    $location.url('/loginreg');
  }

  $scope.index = function(){
    dashFactory.oneTopic(rParams.topicId,function(returnedData){
      $scope.topic = returnedData;
    })
  }

  $scope.index();

  $scope.user = $cookies.get('user');

  $scope.logout = function(){
    dashFactory.logout(function(){
      $location.url('/loginreg');
    });
  };

  $scope.newPost = function(){
    dashFactory.newPost(rParams.topicId, $scope.post, function(returnedData){
      if(returnedData.errors){
        $scope.errors = returnedData.errors;
      }else{
        $scope.post={};
        $scope.index();
      }
    })
  };

  $scope.newComment = function(postId, comment, index){
    dashFactory.newComment(postId, {text: comment}, function(returnedData){
      if(returnedData.errors){
        $scope.errors2 = returnedData.errors;
        $scope.thisOne = index;
      }else{
        console.log('MADE IT BACK FROM SERVER!!')
        $scope.errors2 = undefined;
        $scope.index();
      }
    })
  };

  $scope.vote = function(userVote, postId){
    dashFactory.vote(userVote, postId, function(){
      $scope.index();
    })
  };


}]);
