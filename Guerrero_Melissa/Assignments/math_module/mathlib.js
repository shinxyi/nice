module.exports = function (){
  return {
    add: function(num1, num2) { 
      return num1 + num2;
      },
    multiply: function(num1, num2) {
      return num1 * num2;
      },
    square: function(num) {
      return num * num;
      },
    random : function(a,b) {
      return Math.floor(Math.random() * 35) + 1;
      }
  }
};