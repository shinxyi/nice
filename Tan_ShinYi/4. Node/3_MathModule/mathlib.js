module.exports = function (){
  return {
    add: function(num1, num2) {
         var sum= num1+num2;
         console.log('sum of ' + num1 + ' and ' + num2 + ' is ' + sum );
       },
    multiply: function(num1, num2) {
        var product = num1*num2;
        console.log('product of ' + num1 + ' and ' + num2 + ' is ' + product );
       },
    square: function(num) {
         var square = num*num;
         console.log('square of ' + num + ' is ' + square );
       },
    random: function(num1, num2){
        var random = Math.trunc(Math.random()*(num2-num1))+num1;
        console.log('random number between ' + num1 + ' and ' + num2 + ' is ' + random);

    }
  }
};
