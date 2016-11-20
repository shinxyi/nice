console.log('Products Factory');

app.factory('productsFactory', ['$http', function($http) {

  function ProductsFactory(){

    this.index = function(callback){
      $http.get('/getProducts').then(function(returned_data){
        callback(returned_data.data);
      })
    };

    this.add = function(product, callback){
      console.log('!!! TRYING TO ADD PRODUCT IN PRODUCT FACTORY');
      console.log(product);
      $http.post('/newProduct', product).then(function(returned_data){
        callback(returned_data.data);
      })
    };

    this.getOne = function(id, callback){
      $http.get('/show/' + id).then(function(returned_data){
        callback(returned_data.data);
      })
    };

    this.update = function(id, info, callback){
      $http.post('/show/' + id, info).then(function(returned_data){
        callback(returned_data.data);
      })
    }


  }

  console.log(new ProductsFactory());
  return new ProductsFactory();

}]);
