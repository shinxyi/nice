module.exports = function (){
  return {
    add: function(num1, num2) { 
         console.log("The sum of",(num1),"plus",(num2), "is",num1 + num2)         
    },
    multiply: function(num1, num2) {
         console.log("The product of",(num1),"times",(num2),"is",num1 * num2)          
    },
    square: function(num) {
         console.log("The number",(num),"squared is",num * num)
         //or//
         console.log("The number",(num),"squared is",Math.pow(num,2))            
    }
  }
}