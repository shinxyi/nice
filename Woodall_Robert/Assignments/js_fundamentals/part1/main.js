"use strict";

/* print array items and add/remove values from array */
var x = [3,5,'Dojo', 'rocks', 'Michael', 'Sensei'];
console.log('x items:', x);

x.push(100);
console.log('x after push(100):', x);

x = x.concat(['hello', 'world', 'JavaScript is Fun']);
console.log('x after concatenated array:', x);

/* sum values 1-500 */

console.log('\nsum values from 1-500...');
var sum = 0;
for (var i = 0; i < 500; i++) {
	sum += i;
}
console.log('final sum:', sum);

/* find min in array */

console.log('\nfind min in [1, 5, 90, 25, -3, 0]:');
x = [1, 5, 90, 25, -3, 0];
var min = x[0];

for (var i = 0; i < x.length; i++) {
	min = x[i] < min ? x[i] : min;
}
console.log(min);

/* find avg of array */

console.log('\nfind avg of [1, 5, 90, 25, -3, 0]:');
x = [1, 5, 90, 25, -3, 0];
var sum = 0;

for (var i = 0; i < x.length; i++) {
	sum += x[i];
}
console.log(Math.round(sum / x.length));

/* iterate through object and print key/value pair */

console.log('\niterate through object and print details:');
var new_ninja = {
	name: 'Jessica',
	profession: 'coder',
	favorite_language: 'JavaScript',
	dojo: 'Dallas'
};

for (var key in new_ninja) {
	console.log(key, ':', new_ninja[key]);
}