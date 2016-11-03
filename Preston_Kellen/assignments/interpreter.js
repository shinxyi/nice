//problem 1
var first_variable;
function firstFunc() {
  first_variable = "Not anymore!!!";
  console.log(first_variable);
}
console.log(first_variable); //this will return as undefined
first_variable = "Yipee I was first!";
console.log(first_variable);

//problem 2
var food;
function eat() {
  var food;
  food = "half-chicken";
  console.log(food);
  food = "gone";
  console.log(food);
}
food = "Chicken";
eat();
console.log(food);

//problem 3
var new_world;
function lastFunc() {
  new_word = "old";
}
new_word = "NEW!";
console.log(new_word);
