app.controller('dashController', ['$scope','productsFactory','customersFactory','ordersFactory', '$location', function($scope, productsFactory, customersFactory, ordersFactory, $location) {

  productsFactory.index(function(returnedData){

    $scope.products = returnedData;
  })

  customersFactory.getAll(function(returnedData){
    $scope.customers = returnedData;
  })

  ordersFactory.index(function(returnedData){
    $scope.orders = returnedData;
  })

}]);
