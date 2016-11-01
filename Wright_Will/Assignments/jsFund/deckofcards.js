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
    build: function(){
        this.cards = []
        addSuite = (suite) => {
            hex = "1F0" +  suite + 0
            dec = parseInt(hex,16)
            for (let i = 1; i <= 13; i++){
                card = String.fromCodePoint(dec + i)
                this.cards.push(card)
            }
        }
        ["A","B","C","D"].forEach(addSuite)
        // ["A","B","C","D"].forEach(function(suite){
        //     hex = "1F0" +  suite + 0
        //     dec = parseInt(hex,16)
        //     for (let i = 1; i <= 13; i++){
        //         card = String.fromCodePoint(dec + i)
        //         this.cards.push(card)
        //     }
        // },this)
    },
    deal: function(){
        return this.cards.pop()
    }
}

function Player(name="johndoe"){
    this.name = name
    this.hand = []
}
Player.prototype = {
    drawCard: function(deckObj,n=1){
        for (let i = 0; i < n; i++) {
            this.hand.push(deckObj.deal())
        }
    }
}



deck = new Deck()
player = new Player("fred")
// deck.shuffle(2)
// deck.reset()
console.log(deck.cards.length);
console.log(deck.cards);
// player.drawCard(deck)
// console.log(console.log(deck.cards.length));
// console.log(player.hand);



// suites2 = ["A","B","C","D"]
// cards = [1,2,3,4,5,6,7,8,9,10]
// var str = String.fromCodePoint(127139)
//
// console.log(str);
// // console.log('	🂱')
// // "U+1F0A1"
// console.log(parseInt("1fd0f",16));
