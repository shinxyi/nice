var x = [];
x = [3,5,'Dojo', 'rocks', 'Michael', 'Sensei'];
for (var i in x){
console.log(x[i])};
x.push(100);
console.log(x);
x=["hello", "world", "JavaScript is Fun"];
console.log(x);
var sum = 0
for(var i=0; i <= 500; i++){
	var sum = i + sum;
}
console.log(sum);
var array = [1, 5, 90, 25, -3, 0];
min = array[0];
for(var key in array){
	if(min > array[key]){
		min = array[key];
	}
}
console.log(min)
var array = [1, 5, 90, 25, -3, 0];
ave = 0;
count = 0;
for(var key in array){	
	ave = ave + array[key];
	count ++

}
ave = ave/count;
console.log(ave)

var new_ninja = {
 name: 'Jessica',
 profession: 'coder',
 favorite_language: 'JavaScript', //like that's even a question!
 dojo: 'Dallas'
}
for(var key in new_ninja){
	console.log(key);
	console.log(new_ninja[key]);

}