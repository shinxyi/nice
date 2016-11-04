module.exports = function(){
    return {
        add: function(num1, num2){
            console.log("the sum is:", num1 + num2);
        },
        multiply: function(num1, num2){
        	console.log("the product is:", num1 * num2);
        },
        square: function(num){
        	console.log("the squared product is:", num*num);
        },
        random: function(num1, num2){
        	output = Math.random()*(num2 - num1) + num1;
        	output = Math.floor(output);
        	console.log("The random number is:", output);
        }
    };
};