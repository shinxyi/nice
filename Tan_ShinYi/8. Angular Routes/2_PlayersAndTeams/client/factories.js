myApp.factory('playerFactory', function (){
  var players = [{name: 'Yukihiro', team: "" },
                 {name: 'James', team: ""}
                ];
  var factory = {};

  factory.index = function (callback){
      console.log('PLAYERS FROM DB', players);
      callback(players);
  }

  factory.create = function(player){
    player.team="";
    players.push(player);
  }

  factory.update = function(player, team){
    players[player].team= team;
  }

  factory.delete = function(index){
    players.splice(index, 1);
  }
  return factory;
});

myApp.factory('teamFactory', function (){
  var teams = ["Seahawks", "49ers"];
  var factory = {};

  factory.index = function (callback){
      callback(teams);
  }

  factory.create = function(team){
    teams.push(team);
  }

  factory.show = function(team){

  }

  factory.delete = function(index){
    teams.splice(index, 1);
  }
  return factory;
});
