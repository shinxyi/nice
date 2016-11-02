var hello = 'interesting';
function example(){
	var hello;
	hello = 'hi!';
	console.log(hello);
}
hello = 'interesting';
example();
console.log(hello);

function firstFunc(){
	var first_variable;
	first_variable = 'Not anymore';
	console.log(first_variable);
}
firstFunc();
first_variable = 'Yipee I was first';
console.log(first_variable);


var food;
function eat() {
  food = "half-chicken";
  console.log(food);
  var food = "gone"; 
  console.log(food);
}
eat();
food = 'Chicken'
console.log(food);


var new_word;
function lastFunc() {
  new_word = "old";
}
lastFunc();
console.log(new_word);
new_word = 'New';
console.log(new_word);






