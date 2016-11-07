		// Go through each value in the array x, where x = [3,5,‘Dojo’, ‘rocks’, ‘Michael’, ‘Sensei’]. Log each value.

		// x = [3, 5, 'Dojo', 'rocks', 'Michael', 'Sensei']; 
			
		// for (var i=0; i<x.length; i+=1){
		// 	console.log(x[i])
		// }

		// Add a new value (100) in the array x using a push method.
			// x.push(100)
				// console.log(x)
		
		// Add a new array ["hello", "world", "JavaScript is Fun"] to variable x. Log x in the console and analyze how x looks now.	
			// x.push.apply(x,['hello', 'world', 'Javascript is fun'])
			// console.log(x)

		// Create a simple for loop that sums all the numbers between 1 to 500. Have console log the final sum.
			// var sum = 0

			// for (var i = 0; i < 501; i++){
			// 	sum += i;
			// 	console.log (sum)
			// }

		// Write a loop that will go through the array [1, 5, 90, 25, -3, 0], find the minimum value, and then print it

			// var min = array[0]
			// var x = [1, 5, 90, 25, -3, 0]
			// for(var i = 0; i < x.length; i++){
			// 	if(x[i] < min){
			// 		min = x[i] 
			// 	}

			// }
			// 	console.log(min)

		// Write a loop that will go through the array [1, 5, 90, 25, -3, 0], find the average of all of the values, and then print it
			// x = [1, 5, 90, 25, -3, 0]
			// sum = 0
			// count = 0
			// for(var i = 0; i < x.length; i++){
			// 	sum += x[i];
			// 	count++;
			// 	avg = sum / count
			// }
			// console.log(avg)

		var new_ninja = {
			name: 'Jessica',
			profession: 'coder',
			favorite_language: 'JavaScript', //like that's even a question!
			dojo: 'Dallas'
		}
		for(var key in new_ninja){			//no length value in objects
			console.log(new_ninja[key]);  
		}