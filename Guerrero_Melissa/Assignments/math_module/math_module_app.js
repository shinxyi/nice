var mathlib = require('./math_module_lib/mathlib')();
var math = new mathlib();
a = 1;
b = 35;
console.log("Sum is: ",math.add(num1, num2));
console.log("Product is: ",math.product(num1, num2));
console.log("Square is: ",math.square(num));
console.log("Random number is: ",math.random(a, b));
