//CARDS: 0 = Ace, 10 = Jack, 11 = Queen, 12 = King

function DeckConstructor() {
    var deck = {};//end var deck
    this.cards = [];

    for (i=0; i<52; i++) {
        for (x=0; x<13; x++){
            this.cards.push(x);
        }//end for
    }//end for

    this.shuffle = function(){
        var m = this.cards.length, temp, i;

        //While there remains elements to shuffle
        while (m){
            //Pick a random element
            i = Math.floor(Math.random() * m--);

            //And swap
            temp = this.cards[m];
            this.cards[m] = this.cards[i];
            this.cards[i] = temp;
        }//end while

        return this.cards;
    }//end shuffle

    this.reset = function(){
        for (i=0; i<52; i++) {
            for (x=0; x<13; x++){
                this.cards[i] = x;
            }//end for
        }//end for
        return this.cards;
    }//end reset

    this.deal = function(){
        var index = Math.floor(Math.random() * 52);
        var temp;
        if (index == this.cards[this.cards.length-1]){
            return this.cards.pop();
        }

        temp = this.cards[index];
        this.cards[index] = this.cards[this.cards.length-1];
        this.cards[this.cards.length-1] = temp;

        return this.cards.pop();
    }//end deal
};


function PlayerConstructor(name) {
    var player = {};

    this.name = name;
    this.hand = [];
    deck = new DeckConstructor();
    this.takeCard = function(){
        this.hand.push(deck.deal());
    }
    this.discardCard = function(){
        this.hand.pop();
    }
};


function BlackJack() {
    var dealer = new PlayerConstructor("dealer");
    var player = new PlayerConstructor("player");
    var dealerSum = 0;
    var playerSum = 0;

    dealer.takeCard()
    dealer.takeCard();
    player.takeCard()
    player.takeCard();

    if ((dealer.hand[0] == 0 && dealer.hand[1] == 10) || (dealer.hand[0] == 10 && dealer.hand[1] == 0)) { console.log("BlackJack! You lose!"); }

    if ((player.hand[0] == 0 && player.hand[1] == 10) || (player.hand[0] == 10 && player.hand[1] == 0)) {console.log("BlackJack! You win!");}

    function faceCards(card){
        if (card > 10) {card = 10};
    }//end faceCards

    do {
        dealerSum = 0;
        playerSum = 0;
        for (var i=0; i<dealer.hand.length; i++){ faceCards(dealer.hand[i]); }
        for (var i=0; i<player.hand.length; i++){ faceCards(player.hand[i]); }
        for (var i=0; i<dealer.hand.length; i++){ dealerSum += dealer.hand[i]; }
        for (var i=0; i<player.hand.length; i++){ playerSum += player.hand[i]; }

        if (dealerSum < 21) { dealer.takeCard(); }
        if (playerSum < 21) { player.takeCard(); }
    } while (dealerSum < 21);

    if (dealerSum <= 21 && playerSum > 21){
        console.log("Dealer busts! You win!");
    }
    else{
        console.log("You lose!");
    }

};//end BlackJack

BlackJack();
