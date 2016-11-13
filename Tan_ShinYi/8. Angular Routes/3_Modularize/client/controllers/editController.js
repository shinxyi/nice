/* EDIT CONTROLLER: this controller uses 'this', and the controlValue seems to not update (a bug for you to fix! possibly one new line of code ~ 14 characters, and one modification of something that already exists)*/
app.controller('editController', ['$scope', 'userFactory', '$location', '$routeParams', function($scope, userFactory, $location, rParams) {
  /* Public Properties */
  this.controlValue = "Current Name:";
  /* Public Methods */
  this.getUser = function() {
    userFactory.show(rParams.id, function passedToUserFactoryShow(user) {
      $scope.user = user;
    })
  }

  this.updateUser = function(){
    userFactory.update(this.info, rParams.id, function passedToUserFactoryUpdate(userFromFactory){
      $scope.user = userFromFactory;
      // what is this? --> This refers to the global object, the entire window
      // because of where the function is called from.
      this.controlValue = "Updated Name: "
    });
  }

  this.redirect = function(){
    $location.url('/index');
  }
  /* on load time */
  this.getUser();
  console.log('!!!!!', this);
}]);
