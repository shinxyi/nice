app.controller('customersController', ['$scope','customersFactory', function($scope, customersFactory) {

  var getAll= function(){
    customersFactory.getAll(function(returnedData){
                         $scope.customers = returnedData;
                       });
  }

  getAll();

  $scope.add = function(){
    console.log($scope.info);
    customersFactory.create($scope.info, function(returnedData){
      if(returnedData.errors){
        $scope.errors = returnedData.errors;
      }else{
        getAll();
        $scope.info={};
      }
    })
  };

  $scope.delete = function(id){
    customersFactory.delete(id, function(returnedData){
      if(returnedData.errors){
        $scope.errors = returnedData.errors;
      }else{
        getAll();
      }
    })
  };

}]);
