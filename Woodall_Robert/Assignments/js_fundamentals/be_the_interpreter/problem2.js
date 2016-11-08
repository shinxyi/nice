// problem 2
//var food = 'chicken';
//function eat() {
//	food = 'half-chicken';
//	console.log(food);
//	var food = 'gone';
//	console.log(food);
//}
//
//eat();
//console.log(food);

// answer for problem 2:
var food;
food = 'chicken';
function eat() {
	var food;
	food = 'half-chicken';
	console.log(food);
	food = 'gone';
	console.log(food);
}

eat();
console.log(food);