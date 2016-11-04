module.exports = function(){
    return {

        add: function(num1, num2){
            console.log("the sum is:", num1 + num2)
        },
        multiply: function(num1, num2) {
            console.log("the product is:", num1 * num2)
        },
        square: function(num1) {
            console.log("the number squared is:", num1 * num1)
        },
        random: function(num1, num2) {
            console.log("the random number is:", Math.floor(Math.random() * (num1 , num2) + num1))
        }
    }
}
