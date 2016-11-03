//group activity ken nguyen & will wright

var wallet = {
  coins: {
    pennies: [0,0.01],
    nickles: [0,0.05],
    dimes: [0,0.10],
    quarters: [0,0.25],
    half_dollars: [0,0.50],
    dollar_coins: [0,1.00]
  },

  dollars: {
    ones: [0,1.00],
    twos: [0,2.00],
    fives: [0,5.00],
    tens: [0,10.00],
    twenties: [0,20.00],
    fifties: [0,50.00],
    hundreds: [0,100.00]
  },

  total: function (){
    var total = 0
    for (var currency in this.coins){
      total += this.coins[currency][0]*this.coins[currency][1]
    }
    for (var currency in this.dollars){
      total += this.dollars[currency][0]*this.dollars[currency][1]
    }
    return console.log(total)
  },

  add: function(currency, count=1){
    if (this.coins[currency]){
      this.coins[currency][0] += count
    } else
    if (this.dollars[currency]){
      this.dollars[currency][0] += count
    } else {
      console.log("not valid currency")
    }
    return this.total()
  },

  subtract: function(currency, num=1){
    return this.add(currency, -num)
  }
}

function bankAccountConstructor() {
  obj = {}
  var savings = 0
  var checking = 0
  obj.savingsTotal = function() {
    return savings
  }
  obj.checkingTotal = function() {
    return checking
  }
  obj.total = function() {
    return savings+checking
  }
  obj.depositSavings = function(amount){
    savings += amount
    return obj.savingsTotal()
  }
  obj.depositChecking = function(amount){
    checking += amount
    return obj.checkingTotal()
  }
  obj.withdrawSavings = function(amount){
    if (amount > savings){
      return console.log("insufficient funds")
    } else {
      savings -= amount
      return obj.savingsTotal()
    }
  }
  obj.withdrawChecking = function(amount){
    if (amount > checking){
      return console.log("insufficient funds")
    } else {
      checking -= amount
      return obj.checkingTotal()
    }
  }
  return obj
}

wallet.total()
wallet.add("twenties", 200)
wallet.add("hundreds", 5)
wallet.subtract("hundreds", 2)

var ba = bankAccountConstructor()

ba.depositSavings(1000)
ba.depositChecking(5000)

console.log(ba.savingsTotal(), ba.checkingTotal())

ba.withdrawChecking(2800)
ba.withdrawSavings(3000)

console.log(ba.savingsTotal(), ba.checkingTotal())
