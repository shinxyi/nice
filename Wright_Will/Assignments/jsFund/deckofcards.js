function Deck(){
    this.cards = []
    this.build()
    this.shuffle()
}

Deck.prototype={
    shuffle: function(){
        var arr = this.cards
        for (var i = 0; i < arr.length; i++) {
            var rand = Math.floor(Math.random()*52)
            var temp = arr[i]
            arr[i] = arr[rand]
            arr[rand] = temp
        }
    },
    //places card on top of cards
    addCard: function(card){
        this.cards.push(card)
        return this
    },
    //fills cards deck with all cards in order
    build: function(){
        this.cards = []
        addSuite = (suite) => {
            hex = "1F0" +  suite + 0
            dec = parseInt(hex,16)
            for (let i = 1; i <= 13; i++){
                var card = String.fromCodePoint(dec + i)
                this.cards.push(card)
            }
        }
        ["A","B","C","D"].forEach(addSuite)
    },
    deal: function(){
        return this.cards.pop()
    }
}
// Player Constructor
function Player(name="johndoe"){
    this.name = name
    this.hand = []
}

Player.prototype = {
    drawCard: function(deckObj,n=1){
        for (let i = 0; i < n; i++) {
            this.hand.push(deckObj.deal())
        }
    },
    discardCard: function(cardIndex=0){
        this.hand = this.hand.slice(0,cardIndex).concat(this.hand.slice(cardIndex+1))
    }
}



// deck = new Deck()
// player = new Player("fred")
//
// console.log(deck.cards.length);

// exports.Player = Player
// exports.Deck = Deck
