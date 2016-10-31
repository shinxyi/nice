x = [3, 5, 'Dojo', 'rocks', 'Michael', 'Sensei']
for (var i = 0; i < x.length;i++){
	console.log(x[i])
}

x.push(100)
console.log(x)

x = ['hello', 'world', 'javascript is fun']
console.log(x)

var sum = 0
for (var i = 0; i <= 500;i++){
	sum += i
}
console.log(sum)

arr = [1, 5, 90, 25, -3, 0]
min = arr[0]
for (var i = 0;i < arr.length;i++){
	if (arr[i] < min){
		min = arr[i]
	}
}
console.log(min);

sum = 0
for (var i = 0; i < arr.length;i++){
	sum += arr[i]
}
var avg = sum / arr.length
console.log(avg)

var new_ninja = {
	name: 'Jessica',
	profession: 'coder',
	favorite_language: 'Javascript',
	dojo: 'Dallas'
}
console.log(new_ninja.name)
console.log(new_ninja.profession)
console.log(new_ninja.favorite_language)
console.log(new_ninja.dojo)
