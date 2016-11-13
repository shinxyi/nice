console.log('Friends Factory');

app.factory('friendsFactory', ['$http', function($http) {

  var friends = [];
  var friend = {};

  function FriendsFactory(){

    var _this = this;

    this.index = function(callback){
      $http.get('/friends').then(function(returned_data){
        friends = returned_data.data;
        callback(friends);
      });
     //Note: this can be shortened to $http.get('/friends').then(callback);
     //But only if you only want to run the callback from the controller.
    };

    this.create = function(newfriend,callback){
      $http.post('/friends', newfriend).then(function(returned_data){
        console.log(returned_data.data);
        if (typeof(callback) == 'function'){
          callback(returned_data.data);
        }
      });
    };

    this.update = function(updatefriend, id){
        $http.put('/friends/' + id, updatefriend).then(function(){
      })
    };

    this.show = function(id, callback){
      console.log('made it to friends Factory!')
      $http.get('/friends/' + id).then(function(returned_data){
        friend = returned_data.data;
        callback(friend);
      });
    };

    this.delete = function(id, callback){
      console.log('????', id);
      $http.delete('/friends/' + id).then(function(returned_data){
        console.log('in Friends Factory', returned_data.data);
        callback(returned_data.data);
      })
    };

    // Sometimes you might not want to make a DB call, and just get the information stored in the factory.
    this.getFriends = function(callback){
      callback(friends);
    };

    this.getFriend = function(callback){
        callback(friend);
    };
  }

  console.log(new FriendsFactory());
  return new FriendsFactory();

}]);
