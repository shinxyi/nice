var game = {
  players: [],
  deck: [],
  populateDeck: function(){
    for (var i=1; i<152;i++){
      game.deck.push(i);
    }
  },
  shuffleDeck: function(){
    for (var i=1; i<152; i++){
      var index1 = Math.floor(Math.random()*151);
      var index2 = index1;
      while (index1==index2){
        var index2 = Math.floor(Math.random()*151);
      }
      var temp = game.deck[index1];
      game.deck[index1]=game.deck[index2];
      game.deck[index2]=temp;
    }
  }
  addPlayer: function(player){
    game.players.push(player);
  }

};
function playerConstructor(name){
  var player= {
    name: name,
    hand: [],
    addCard: function(card){
      player.hand.push(card);
    }
  }
  return player;
}
//example:
var Joe = playerConstructor('Joe');
var Sarah = playerConstructor('Sarah');
game.addPlayer(Joe);
game.addPlayer(Sarah);
game.populateDeck;
game.shuffleDeck;
console.log("LOGGING GAME BELOW");
console.log(game);
// reminder of how to get things using jquery and AJAX!
$(document).ready(function(){
  $.get("http://pokeapi.co/api/v1/pokemon/1/", function(res) {
    console.log(res);
    var html_str = "";
    html_str += "<h4>Types</h4>";
    html_str += "<ul>";
    for(var i = 0; i < res.types.length; i++) {
       html_str += "<li>" + res.types[i].name + "</li>";
    }
    html_str += "</ul>";
    $("#bulbasaur").html(html_str);
  }, "json");
});
