myApp.controller('playersController', ['playerFactory', '$scope', function (playerFactory, $scope) {
  playerFactory.index(function(data){
    $scope.players = data;
  });

  $scope.add = function(){
    playerFactory.create($scope.newPlayer);
    $scope.newPlayer = {};
  }

  $scope.delete = function(index){
    playerFactory.delete(index);
  }

}]);

myApp.controller('teamController', [ 'playerFactory', '$routeParams', '$scope', function(playerFactory, $routeParams, $scope){
  $scope.teamName = $routeParams.teamname;
  var temp = [];
  $scope.teamPlayers = [];

  playerFactory.index(function(data){
    temp = data;
  })

  for( var i=0; i<temp.length; i++){
    if(temp[i].team===$scope.teamName){
      $scope.teamPlayers.push(temp[i]);
    }
  }

}]);

myApp.controller('teamsController', ['teamFactory', '$scope', function (teamFactory, $scope) {
  teamFactory.index(function(data){
    $scope.teams = data;
  });

  $scope.add = function(){
    teamFactory.create($scope.newTeam.name);
    $scope.newTeam = {};
  }

  $scope.delete = function(index){
    teamFactory.delete(index);
  }
}]);

myApp.controller('associationsController', ['teamFactory', 'playerFactory', '$scope', function (teamFactory, playerFactory, $scope) {
  teamFactory.index(function(data){
    $scope.teams = data;
  });

  playerFactory.index(function(data){
    $scope.players = data;
  });

  for(var i=0; i<$scope.players.length; i++){
    if(!$scope.teams.some(function check(el){
      return el === $scope.players[i].team;
    })){
      playerFactory.update(i, "");
    }
  }

  $scope.add = function(){
    playerFactory.update($scope.newAssoc.player, $scope.newAssoc.team);
    $scope.newAssoc = {};
  }

  $scope.clear = function(player){
    playerFactory.update(player, "");
  }
}]);
