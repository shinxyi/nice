console.log('Customers Factory');

app.factory('customersFactory', ['$http',  function($http) {

  // var users = [];
  // var users = {};

  function CustomersFactory(){

    // var _this = this;

    this.getAll = function(callback){
      console.log('made it to customersFactory')
      $http.get('/index').then(function(returnedData){
        console.log('got data back from server', returnedData.data)
        callback(returnedData.data);
      })
    }

    this.create = function(user, callback){
      if(!user){
        callback({errors: ['Fields cannot be empty!!']});
      }else{
        $http.post('/create', user).then(function(returned_data){
          callback(returned_data.data);
        })
      }
    };

    this.delete = function(id, callback){
      $http.delete('/destroy/' + id).then(function(returned_data){
        if(returned_data.data){
          callback(returned_data.data);
        }
      });
    };
  }

  console.log(new CustomersFactory());
  return new CustomersFactory();

}]);
