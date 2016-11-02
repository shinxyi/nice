// var sum = 0
// for(var i=0; i <= 500; i++){
// 	var sum = i + sum;
// }
// console.log(sum);
function mySum(x, y){
var sum = 0;
	for(var i = x; i <= y; i++){
		sum = sum + i;
	}
return sum
}

console.log(mySum(10,20))


function myArrayMin(array){

min = array[0];
	for(var key in array){
		if(min > array[key]){
			min = array[key];
		}
	}
return min
}
var myaaray = [1, 5, 90, 25, -3, 0];
console.log(myArrayMin(myaaray))

function myArrayAve(array){

ave = 0;
count = 0;
	for(var key in array){	
		ave = ave + array[key];
		count ++

	}
ave = ave/count;
return ave
}
var myaaray = [1, 5, 90, 25, -3, 0];
console.log(myArrayAve(myaaray))

// var person = { 
// 	name : "Junaid",
//   	distance_traveled : 0,
//   	say_name : function(){
//     	console.log(person.name);

//   },
//   	say_something : function(phrase){
//     	console.log(`${person.name} says: ${phrase}`);
//   },
//   	walk : function(){
//    		 console.log(`${person.name} is walking!`);
// 		person.distance_traveled += 3;
// 		return person;
//   },
// 	run : function(){
//     		console.log(`${person.name} is running!`);
//     		person.distance_traveled += 10;
//     		return person;
//   },
//   	crawl : function(){
//     		console.log(`${person.name} is crawling!`);
//    			person.distance_traveled += 1;
//     		return person;
//   },
//   	chewGum:function(){
//     console.log("I can walk and chew gum, but I can't chew gum and walk...");
//   }
// }
// console.log(person.say_name.walk().chewGum());
// // say_name - should alert the object’s name property
// // say_something - have it accept a parameter. This function should then say for example “{{your name}} says ‘I am cool’” if you pass ‘I am cool’ as an argument to this method.
// // walk - have it alert for example “{{your name}} is walking” and increase distance_traveled by 3
// // run - have it alert for example “{{your name}} is running” and increase distance_traveled by 10
// // crawl - have it alert for example “{{your name}} is crawling” and increase distance_traveled by 1
