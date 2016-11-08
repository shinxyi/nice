'usestrict'
// const blackjack = require('./deckofcards.js')

$(function(){
    var deck = new Deck()
    var dealer = new Player()
    var player1 = new Player()
    var players = [dealer,player1]
    dealNewGame(players,deck)
    showHand(player1)
    $('#player1 .hitme').click(function(){
        player1.drawCard(deck)
        showHand(player1,"player1")
    })
    // $('.stand').click(function(){
    //     dealer.
    // })

})

// player1.drawCard(deck,3)
function handHtmlStr(playerObj){
    var hand = playerObj.hand
    var htmlStr = ""
    for (var i = 0; i < hand.length; i++) {
        htmlStr += "<div class='card col-1'cardNum='" + i +"'>"
        htmlStr+= hand[i]
        htmlStr += "</div>"
    }
    // console.log(htmlStr);
    return htmlStr
}
function showHand(playerObj, htmlSelector){
    var htmlStr = handHtmlStr(playerObj)
    $(htmlSelector).html(htmlStr)
}
function dealNewGame(playersArr,deck){
    for (var i = 0; i < playersArr.length; i++) {
        playersArr[i].drawCard(deck,2)
        // showHand(playersArr[i])
    }
}
