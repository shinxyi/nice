var hello = "interesting";
function example() {
  var hello = "hi!";
  console.log(hello);
}
example();
console.log(hello);

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

console.log(first_variable);
var first_variable = "Yipee I was first!";
function firstFunc() {
  first_variable = "Not anymore!!!";
  console.log(first_variable);
}
console.log(first_variable);

var first_variable;
function firstFunc() {
  first_variable = "Not anymore!!!";
  console.log(first_variable);
}
firstFunc();
first_variable = "Yipee I was first!";
console.log(first_variable);

var food = "Chicken";
function eat() {
  food = "half-chicken";
  console.log(food);
  var food = "gone";       // CAREFUL!
  console.log(food);
}
eat();
console.log(food);

food = "Chicken";
function eat() {
  food = "half-chicken";
  console.log(food);
  var food = "gone";       // CAREFUL!
  console.log(food);
}
var food;
console.log(food);
eat();
var new_word = "NEW!";
function lastFunc() {
  new_word = "old";
}
console.log(new_word);

var new_word = "NEW!";
function lastFunc() {
  new_word = "old";
}
console.log(new_word);
lastFunc();
console.log(new_word);
