//problem 1
console.log(first_variable);
var first_variable = "Yipee I was first!";
function firstFunc() {
  first_variable = "Not anymore!!!";
  console.log(first_variable);
}
console.log(first_variable);

  // //answer 1
  // var first_variable;                     //variable and function get hoisted
  // function firstFunc() {
  //   first_variable = "Not anymore!!!";
  //   console.log(first_variable);
  // }
  // console.log(first_variable);            // console: undefined
  // first_variable = "Yipee I was first!";
  // console.log(first_variable);            // console: "Yippie I was first!"



//problem 2
var food = "Chicken";
function eat() {
  food = "half-chicken";
  console.log(food);
  var food = "gone";       // CAREFUL!
  console.log(food);
}
eat();
console.log(food);

  // //answer 2
  // var food;                   // variables and functions get hoisted
  // function eat() {
  //   var food;                 // nested variable declaration gets hoisted in the scope of its function
  //   food = "half-chicken";
  //   console.log(food);
  //   food = "gone";
  //   console.log(food);
  // }
  // food = "Chicken";
  // eat();                      // console will log: "half-chicken", "gone"
  // console.log(food);          // console: "gone"   ***edit: I was wrong, the answer was "Chicken" -- i think it is because food was declared locally inside the function, so it doesn't change the variable food outside of its scope***




//problem 3
var new_word = "NEW!";
function lastFunc() {
  new_word = "old";
}
console.log(new_word);

  // //answer 3
  // var new_word;                   // variables and functions get hoisted
  // function lastFunc() {
  //   new_word = "old";
  // }
  // new_word = "NEW!";
  // console.log(new_word);          // console: "NEW!"
