console.log('Orders Factory');

app.factory('ordersFactory', ['$http', function($http) {

  function OrdersFactory(){
    this.index = function(callback){
      $http.get('/getOrders').then(function(returned_data){
        callback(returned_data.data);
      })
    };

    this.add = function(product, customer, quantity, callback){
      console.log('!!! TRYING TO ADD ORDER IN ORDERS FACTORY');
      console.log(product, customer, quantity);
      var newOrder = {
                        'customer': customer.name,
                        'customer_id': customer._id,
                        'product': product.name,
                        'product_id': product._id,
                        'quantity': quantity
      }
      $http.post('/newOrder', newOrder).then(function(returned_data){
        callback(returned_data.data);
      })
    };

    this.delete = function(id, quantity, product_id,callback){
      $http.post('/orders/'+id, {'quantity':quantity, 'product_id': product_id}).then(function(){
        callback();
      });
    }

  }

  console.log(new OrdersFactory());
  return new OrdersFactory();

}]);
