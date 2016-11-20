console.log('Users Factory');

app.factory('usersFactory', ['$http', '$cookies',  function($http, $cookies) {

  function UsersFactory(){

  var _this = this;

  this.login = function(user, callback){
    if(!user||!(user.hasOwnProperty('email'))){
        callback({errors: ['Fields cannot be empty!']});
    }else{
      $http.post('/login', user).then(function(returned_data){
        var expireDate = new Date();
        expireDate.setDate(expireDate.getDate() + 1);
        $cookies.put('user', returned_data.data.username , {'expires': expireDate});
        callback(returned_data.data);
      });
    }
  };

  this.create = function(user, callback){
    if(!user||!(user.hasOwnProperty('email'))){
        callback({errors: ['Fields cannot be empty!']});
    }else if(user.password != user.password2){
        callback({errors: ['Passwords do not match!']});
    }else{
        $http.post('/create', user).then(function(returned_data){
        var expireDate = new Date();
        expireDate.setDate(expireDate.getDate() + 1);
        $cookies.put('user', returned_data.data.username , {'expires': expireDate});
        callback(returned_data.data);
      })
    }
  };

  this.getOne = function( id, callback){
    $http.post('/user/'+ id).then(function(returned_data){
      callback(returned_data.data);
    });
  }


  }

  console.log(new UsersFactory());
  return new UsersFactory();

}]);
