app.controller('ordersController', ['$scope','productsFactory','customersFactory','ordersFactory', '$location', function($scope, productsFactory, customersFactory, ordersFactory, $location) {

  var index = function(){
    productsFactory.index(function(returnedData){
      $scope.products = returnedData;
    })

    customersFactory.getAll(function(returnedData){
      $scope.customers = returnedData;
    })

    ordersFactory.index(function(returnedData){
      $scope.orders = returnedData;
    })

  }

  index();

  $scope.setProduct = function(id, name, quantity){
    $scope.productSelected= {'_id': id, 'name': name, 'quantity': quantity};
  };

  $scope.setCustomer = function(id, name){
    $scope.customerSelected= {'_id': id, 'name': name};
  };

  $scope.setOrder = function(){ //should move all this logic to the factory...
    if(!$scope.productSelected || !$scope.customerSelected){
      $scope.errors = ['All fields must be filled (Customer Name, Product Name, and Quantity of Product.)'];
    }else if(!$scope.quantity){
      $scope.errors = ['All fields must be filled (Customer Name, Product Name, and Quantity of Product.)'];
    }else if($scope.quantity<1 || $scope.quantity>$scope.productSelected.quantity){
      $scope.errors = ['Quantity of product cannot be less than 1 or greater than quantity left of that product.'];
    }else{
      ordersFactory.add($scope.productSelected, $scope.customerSelected, $scope.quantity, function(returnedData){
        if(returnedData.errors){
          $scope.errors = returnedData.errors;
        }else{
          $scope.productSelected= undefined;
          $scope.customerSelected= undefined;
          $scope.quantity=undefined;
          index();
        }
      })
    }
  }

  $scope.delete = function(id, quantity, product_id){
    ordersFactory.delete(id, quantity, product_id, function(){
      index();
    });
  }

}]);
