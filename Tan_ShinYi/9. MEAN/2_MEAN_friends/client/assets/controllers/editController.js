app.controller('editController', ['$scope','friendsFactory', '$location', '$routeParams', function($scope, friendsFactory, $location, rParams) {
  /*
    GET A FRIEND FROM THE FACTORY, This is a one time thing when we load this partial -
    so we didn't set a variable so we could reuse it -
    we just run the friendsFactory method directly.
  */

   friendsFactory.show(rParams.id, function(returned_data){
     $scope.friend = returned_data;
     $scope.info = $scope.friend;
     $scope.info.birthday = new Date($scope.info.birthday);
   });

   $scope.update = function(){
     friendsFactory.update($scope.info, rParams.id);
     $location.url('/friends');
   }

   $scope.delete = function(id){
     friendsFactory.delete(id);
     $location.url('/friends');
   }

}]);
