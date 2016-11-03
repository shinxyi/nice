module.exports = function (){
  return {
    add: function(num1, num2) { 
         
         console.log("adding...");
         console.log("result:", num1 + num2);
         return num1 + num2; 
       },
    multiply: function(num1, num2) {
        console.log("multiplying...");
        console.log("result:", num1 * num2);
        return num1 * num2; 
       },
    square: function(num) {
        console.log("squaring...");
        console.log("result:", num * num);
        return num * num; 
    },
    random: function(min, max) {
      console.log("generating random number...");
      console.log("result:", Math.floor(Math.random() * (max - min) + min));
    },
  };
};