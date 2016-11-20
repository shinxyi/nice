app.controller('productController', ['$scope','productsFactory', '$routeParams', '$location', function($scope, productsFactory, rParams, $location) {


  var getOne = function(){
    productsFactory.getOne(rParams.id, function(returnedData){
      $scope.product = returnedData;
      $scope.info = $scope.product;
    })
  }

  getOne();

  $scope.update = function(){
    productsFactory.update(rParams.id, $scope.info, function(returnedData){
      if(returnedData.errors){
        $scope.errors = returnedData.errors;
      }else{
        $location.url('/products');
      }
    })
  }
}]);
