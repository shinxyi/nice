var mathop = require('./mathlib');


mathop.add(30,45);
var mult = mathop.multiply(3,6);
console.log(' The product is', mult);
var sq = mathop.square(8);
console.log('The square is',sq);
var rand = mathop.random(1,35);
console.log('A random number between 1 and 35 is',rand);