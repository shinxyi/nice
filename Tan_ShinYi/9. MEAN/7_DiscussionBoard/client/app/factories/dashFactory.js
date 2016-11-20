console.log('dashboard Factory');

app.factory('dashFactory', ['$http', '$cookies',  function($http, $cookies) {

  function DashboardFactory(){

    var _this = this;

    this.index = function(callback){
      $http.get('/index').then(function(returned_data){
        callback(returned_data.data);
      })
    }

    this.categorize = function(callback){
      $http.get('/categories').then(function(returned_data){
        callback(returned_data.data);
      });

    }

    this.newTopic = function(topic, callback){
      $http.post('/newTopic', topic).then(function(returned_data){
        callback(returned_data.data);
      })
    };

    this.oneTopic = function(id, callback){
      $http.get('/topic/'+id).then(function(returned_data){
        callback(returned_data.data);
      })
    };

    this.newPost = function(topicId, post, callback){
      $http.post('/newPost/'+ topicId, post).then(function(returned_data){
        callback(returned_data.data);
      })
    };

    this.newComment = function(postId, comment, callback){
      if(!comment.text){
        return callback({errors: 'Comment cannot be empty!'})
      }
      console.log('!!! TRYING TO POST COMMENT IN INTERX FACTORY');
      console.log(comment);
      $http.post('/newComment/'+ postId , comment).then(function(returned_data){
        callback(returned_data.data);
      })
    };

    this.vote = function(userVote, postId, callback){
      $http.post('/vote/'+postId, {userVote: userVote}).then(function(returned_data){
        callback();
      })
    }

    this.logout = function(callback){
      $http.get('/logout');
      $cookies.remove('user');
      callback();
    };

  };

  console.log(new DashboardFactory());
  return new DashboardFactory();

}]);
