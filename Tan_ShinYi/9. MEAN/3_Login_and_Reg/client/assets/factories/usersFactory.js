console.log('Users Factory');

app.factory('usersFactory', ['$http', function($http) {

  var users = [];
  var users = {};
  var loggedin_user = null;

  function UsersFactory(){

  var _this = this;

    this.create = function(user, callback){
      console.log('!!!!', user);
      if(user.password != user.password2){
        callback({errors: ['Passwords do not match!']});
      }else{
        $http.post('/reg', user).then(function(returned_data){
          loggedin_user = returned_data.data;
          callback(returned_data.data);
        })
      }
    };

    this.login = function(user, callback){
      console.log('made it to this.login in users Factory!');
      console.log('???', user);
      if(!user||!(user.hasOwnProperty('email'))){
        callback({errors: ['Fields cannot be empty!']});
      }else{
        $http.post('/login', user).then(function(returned_data){
          user = returned_data.data;
          loggedin_user = user;
          console.log("SAVING USER FROM LOGIN",loggedin_user);
          callback(user);
        });
      }
    };

    this.acct = function(callback){
      callback(loggedin_user);
    };

    this.logout = function(){
      loggedin_user = null;
    }

  }

  console.log(new UsersFactory());
  return new UsersFactory();

}]);
