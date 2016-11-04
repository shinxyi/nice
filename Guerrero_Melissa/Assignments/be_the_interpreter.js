
var first_variable = "Yipee I was first!"; <--have to declare
and assign value first to avoid undefined
console.log(first_variable);
function firstFunc() {
  first_variable = "Not anymore!!!";
  console.log(first_variable);
}
console.log(first_variable);


*food = "half-chicken";
*var food = "gone";
these are inside eat() and so they
aren't in the same scope of the exercise
as var food = "Chicken";

function eat() {
  
  console.log(food);
         			// CAREFUL!
  console.log(food);
}
eat();
console.log(food); <--this logs Chicken
because it is the over-arching variable's
value

var new_word = "NEW!";
function lastFunc() {
  new_word = "old";
}
console.log(new_word); <--this logs NEW!
because it is the over-arching variable's
value