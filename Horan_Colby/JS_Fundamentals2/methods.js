// Methods

//1

var sumlist = function(start, end){
	var start = 2
	var end = 150
	var sum = 0
	while (start <= end){
		sum += start
		start++
	}
console.log(sum)
}

sumlist()

// 2
var minFunc = function(x){
	var x = [5, 2, 99, -4, 6, -85, 9]
	var min = x[0]
	for (var i = 0;i < x.length;i++){
		if (x[i] < min){
			min = x[i]
		}
	}
	console.log(min)
}

minFunc() // Side note, minFunc is my new javascript funk band

//3
var findAvg = function(){
	var sum = 0
	var arr = [4, 8, 15, 16, 23, 42]
	for (var i = 0;i < arr.length;i++){
		sum += arr[i]
	}
	var avg = sum / arr.length
	console.log(avg)
}

findAvg()

// Object and methods durr
var operations = {
	sumlist,
	minFunc,
	findAvg
}

operations.sumlist()
operations.findAvg()
operations.minFunc()










