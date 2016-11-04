module.exports = function(){
  return {
    add: function(a,b){
      return a+b
    },
    multiply: function(a,b){
      return a*b
    },
    square: function(a){
      return a*a
    },
    random: function(min,max=0){
      //if they only provide one argument, it will be set to max, and min will be zero
      if (max==0){
        max=min
        min=0
      }
      return Math.floor(Math.random()*(max-min+1))+min
    }
  }
}
