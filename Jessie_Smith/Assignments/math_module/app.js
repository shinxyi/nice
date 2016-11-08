var math_module = require('./math_module')();     //notice the extra invocation parenthesis!
console.log(math_module);
math_module.add(5,6);
math_module.multiply(5,6);
math_module.square(5);
math_module.random(1,35);