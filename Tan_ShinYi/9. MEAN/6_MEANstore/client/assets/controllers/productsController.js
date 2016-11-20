app.controller('productsController', ['$scope','productsFactory', '$location', function($scope, productsFactory, $location) {


  var getAll = function(){
    productsFactory.index(function(returnedData){
      $scope.products = returnedData;
    })
  }

  getAll();

  $scope.add = function(){
    productsFactory.add($scope.info, function(returnedData){
      if(returnedData.errors){
        $scope.errors = returnedData.errors;
      }else{
        $scope.errors = undefined;
        $scope.info={};
        getAll();
      }
    })
  };

  $scope.comment = function(postId, commentText, index){
    console.log("?????", commentText);
    console.log(postId);
    var oneComment = { text: commentText }
    interactionsFactory.addComment(postId, oneComment, function(returnedData){
      if(returnedData.errors){
        $scope.errors2 = returnedData.errors;
        $scope.thisOne = index;
      }else{
        $scope.errors2 = undefined;
        // $scope.commentText=undefined;
        $scope.getWall();
      }
    })
  }

}]);
