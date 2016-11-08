var x = [3, 5, 'Dojo', 'rocks', 'Michael', 'Sensei'];
for (var i = 0; i < x.length; i++) {
    console.log(x[i]);
}
x.push(100);
y = ['hello', 'world', 'javascript is fun'];
x.push(y);
console.log(x);

var sum = 0;
var counter = 1;
while (counter < 500) {
    sum += counter;
    counter++;
}
console.log(sum);

var arr = [1, 5, 90, 25, -3, 0];
var w;
for (var i = 1; i < arr.length; i++) {
    var smallest = arr[i - 1];
    if (smallest > arr[i]) {
        w = arr[i];
    }
}
console.log(w);

var arr2 = [1, 5, 90, 25, -3, 0];
var result = 0;

for (var i = 0; i < arr2.length; i++) {
    result += arr2[i];
}
console.log(Math.round(result / arr2.length));

var new_ninja = { name: 'Jessica', profession: 'coder', favorite_language: 'JavaScript', dojo: 'Dallas' }
for (var key in new_ninja) { console.log(new_ninja[key]) }
