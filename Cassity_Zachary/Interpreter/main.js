function firstFunc() {
  first_variable = "Not anymore!!!";
  console.log(first_variable);
}
firstFunc();
var first_variable = "Yipee I was first!";
console.log(first_variable);



var food = "Chicken";
console.log(food);
function eat() {
  food = "half-chicken";
  console.log(food);
  var food = "gone";       // CAREFUL!
  console.log(food);
}
eat();



var new_word = "NEW!";
console.log(new_word);
function lastFunc() {
  new_word = "old";
}
lastFunc();
console.log(new_word);
