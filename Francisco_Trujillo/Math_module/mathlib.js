module.exports = {
		add: function(num1,num2){console.log("The sum is = ", num1 + num2);},
		multiply: function(num1,num2){return num1*num2;},
		square: function(num){return num*num;},
		random: function(min,max){
			var randnu = Math.floor(Math.random()*(max - min) + min);
			return randnu;
		}

};