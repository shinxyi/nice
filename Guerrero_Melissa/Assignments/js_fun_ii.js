		var a =	function getSum(x, y){
		var sum = 0;
		for (var i = x; i<=y; i++){
			sum += i;
			}
		}
		console.log(sum);


		arr = [1,5,90,25,-3,0]
		var b = function getMin(arr){
		var min = arr[0];
		for (var i = 0; i<arr.length; i++){
			if (arr[i] < min) {
				min = arr[i];
				}
			}
		}
		console.log("Min value is:" + min);

		
		arr = [1,5,90,25,-3,0]
		var c =	function printAverage(arr) {
			var sum = arr[0];
			for(var i = 1; i<arr.length; i++){
				sum += arr[i];
				}
			console.log("Average value is:" + sum/arr.length);
			}
		printAverage(arr);

var myObject = {
	getSum: function (x, y){
		var sum = 0;
		for (var i = x; i<=y; i++){
			sum += i;
			}
		}
		console.log(sum);
	} //end function
	getMin: function getMin(arr){
		if (arr) {
		var min = arr[0];
		for (var i = 0; i<arr.length; i++){
			if (arr[i] < min) {
				min = arr[i];
				}
			}
		}
		console.log("Min value is:" + min);
	} //end function
	printAverage: function printAverage(arr){
		var sum = arr[0];
		for(var i = 1; i<arr.length; i++){
				sum += arr[i];
			}
		console.log("Average value is:" + sum/arr.length);
	} //end function
}//end object

var person = {
	name: "Melissa";
	distance_traveled : 0;
	say_name : function(){
		console.log(person.name);
	}
	say_something : function(param){
		console.log("${person.name} says: ${param}");
	}
	walk : function(){
		console.log("${person.name} is walking");
		person.distance_traveled += 3;
		return person;
	}
	run : function(){
		console.log("${person.name} is running");
		person.distance_traveled += 10;
		return person;
	}
	crawl : function(){
		console.log("${person.name} is crawling");
		distance_traveled += 1;
		return person;
	}
}
