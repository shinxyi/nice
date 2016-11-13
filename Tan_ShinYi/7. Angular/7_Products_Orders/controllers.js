app.controller('productsController', ['$scope', 'productFactory', function ($scope, productFactory){
  $scope.products = [];

  productFactory.index(function (data){
      $scope.products = data;
  })

  $scope.add = function(){
    $scope.newProduct.qty = 50;
    productFactory.add($scope.newProduct);
    $scope.newProduct = {};
  }

  $scope.delete= function(index){
    productFactory.delete(index);
  }
}]);

app.controller('ordersController', ['$scope', 'productFactory', function ($scope, productFactory){
  $scope.products = [];

  productFactory.index(function (data){
      $scope.products = data;
  })

  $scope.buy = function(index){
    productFactory.update(index);
  }

}]);
