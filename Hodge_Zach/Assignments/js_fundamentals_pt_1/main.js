var  x = [3,5,'Dojo', 'rocks', 'Michael', 'Sensei'];
for (index in x){
    console.log(x[index])
}
x.push(100);
x.push(["hello", "world", "JavaScript is Fun"]);
console.log(x);

var sum = 0;
for (var i = 1; i <= 500; i++){
    sum += i;
}
console.log(sum);

var min = 0;
var arr = [1, 5, 90, 25, -3, 0];
for (var i = 0; i < arr.length; i++){
    if (min > arr[i]){
        min = arr[i];
    }
}
console.log(min);

var avg = 0.0;
sum = 0;
for (var i = 0; i < arr.length; i++){
    sum += arr[i];
}
avg = sum / arr.length;
console.log(avg);

> var new_ninja = {
    name: 'Jessica',
    profession: 'coder',
    favorite_language: 'JavaScript',
    dojo: 'Dallas'
}
undefined
> for (key in new_ninja) {
    if (new_ninja.hasOwnProperty(key)){
        console.log(key);
        console.log(new_ninja[key]);
    }
}

/* OUTPUT
name
Jessica
profession
coder
favorite_language
JavaScript
dojo
Dallas
undefined
*/
