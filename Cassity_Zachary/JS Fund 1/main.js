var x = [3,5,'Dojo', 'rocks', 'Michael', 'Sensei'];
x.push(100);
x.push(["hello", "world", "JavaScript is Fun"])
for(i = 0; i < x.length; i++){
  console.log(x[i]);
}
console.log(x)
sum = 0;
for(x = 0; x<= 500; x++){
  sum = sum + x;
}
console.log(sum)
var myarr = [1, 5, 90, 25, -3, 0];
var min = 0;
for(i = 0; i < myarr.length; i++){
  if(myarr[i] < min){
    min = myarr[i]
  };
};
console.log(min);
var myarr = [1, 5, 90, 25, -3, 0]
var sum = 0;
var avg = myarr.length
for(i = 0; i < myarr.length; i++){
  sum = sum + myarr[i];
}
avg = sum / avg
console.log(avg)

var new_ninja = {
 name: 'Jessica',
 profession: 'coder',
 favorite_language: 'JavaScript', //like that's even a question!
 dojo: 'Dallas'
}
for (var variable in new_ninja) {
  if (new_ninja.hasOwnProperty(variable)) {
    console.log(variable +':',new_ninja[variable]);
  }
}
