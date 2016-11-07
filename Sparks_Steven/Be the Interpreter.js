Be the Interpreter
		Example problem
			var hello = "interesting";
			function example() {
			  var hello = "hi!";
			  console.log(hello);
			}
			example();
			console.log(hello);

		Example answer
			//declarations get hoisted
			var hello;                 
			function example() {       
			  var hello;               
			  hello = "hi";            
			  console.log(hello);       
			}
			//assignments and invocation maintain order
			hello = "interesting";     
			example();                        
			console.log(hello);

Problem 1:
console.log(first_variable);
var first_variable = "Yipee I was first!";
function firstFunc() {
  first_variable = "Not anymore!!!";
  console.log(first_variable);
}
console.log(first_variable);


		Solution 1:
		function firstFunc() {
		  first_variable = "Not anymore!!!";
		  console.log(first_variable);
		}
		console.log(first_variable);
		var first_variable = "Yipee I was first!";
		console.log(first_variable);


Problem 2:
var food = "Chicken";
function eat() {
  food = "half-chicken";
  console.log(food);
  var food = "gone";       // CAREFUL!
  console.log(food);
}
eat();
console.log(food);

		Solution 2:
		var food;
		function eat() {
		  food = "half-chicken";
		  console.log(food);
		  var food = "gone";       // CAREFUL!
		  console.log(food);
		}
		food = "Chicken";
		eat();
		console.log(food);

Problem 3:
var new_word = "NEW!";
function lastFunc() {
  new_word = "old";
}
console.log(new_word);

Solution 3:
var new_word;
function lastFunc() {
  new_word = "old";
}
new_word = "NEW!";
console.log(new_word);