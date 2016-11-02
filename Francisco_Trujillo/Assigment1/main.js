var x = [3,5,'Dojo', 'rocks', 'Michael', 'Sensei'];
for(var i = 0; i<x.length; i++){
    console.log(x[i]);
}
x.push(100);

var y = ['hello', 'world', 'JavaScript is fun'];

for(var i = 0; i<y.length; i++){
    x.push(y[i]);
}
console.log(x);

var z = [1, 5, 90, 25, -3, 0];

var max = 0;
var avg = 0;

for(var i = 0; i <z.length; i++){
    if (max < z[i]){
        max = z[i];
    }
    avg +=z[i];
}
avg = avg/z.length;
console.log(max, avg);

var new_ninja = {
    name: 'Jessica',
    profession: 'coder',
    favorite_language: 'JavaScript',
    dojo: 'Dallas'
};

for(var key in new_ninja){
    console.log(key, new_ninja[key]);
}

var sum = 0;
for(var i = 1; i<=500; i++){
    sum+=i;

}

console.log(sum);
