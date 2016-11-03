var x = [3, 5, 'Dojo', 'rocks', 'Michael', 'Sensei'];
x.push(100);
for (var i = 0; i < x.length; i++){
  console.log(x[i]);
}
x.push(['Hello', 'World', 'Javascript is Fun']);
console.log(x)

var total = 0
for(var num = 1; num < 501; num++){
  total += num;
}
console.log(total)

var example = [1, 5, 90, 25, -3, 0]
var min = example[0]
for (i = 0; i < example.length; i++){
  if (min > example[i]){
    min = example[i];
  }
}
console.log(min);
var avg = 0;
var count = 0;
for (i = 0; i < example.length; i++){
  count++;
  avg += example[i];
}
avg = avg/i
console.log(avg)


var new_ninja = {
 name: 'Jessica',
 profession: 'coder',
 favorite_language: 'JavaScript', //like that's even a question!
 dojo: 'Dallas'
}

for(var key in new_ninja){
  if(new_ninja.hasOwnProperty(key)){
    console.log(key);
    console.log(new_ninja[key]);
  }
}
