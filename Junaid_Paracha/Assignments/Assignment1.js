x = [3,5, 'Dojo', 'rocks', 'Michael', 'Sensei']
for (var i in x){
	console.log(x[i]);
}
for(var i=0; i < x.length; i++){
	console.log(x[i]);
}
x.push(1000);
x.push(['hello', 'world', 'javascript is fun'])

console.log(x)

for(var i = 0; i<501; i++){
	console.log(i)
}

my_array = [1, 5, 90, 25, -3, 0];

var the_length = my_array.length;
var counter = 0;
var min = my_array[0];
while(counter <= the_length){
	if (my_array[counter] < min){
		min = my_array[counter];
	}
	counter++;
}
console.log(min);
var sum = 0;
for(var i=0; i < my_array.length; i++){
	sum += my_array[i];
}
console.log(sum/my_array.length);