
		
		var x = [3,5,'Dojo','rocks','Michael','Sensei', ["hello", "world","JavaScript is Fun"]]
			for (var i = 0; i<x.length; i++){
				console.log(i);
			}
		x.push(100);

		var sum = 0;
		for (var i = 1; i<=500; i++){
			sum += i;
		}
		console.log(sum);

		
		var y = [1,5,90,25,-3,0]
		var min = y[0];
		for (var i = 0; i<y.length; i++){
			if (y[i] < min) {
				min = y[i];
			}
		}
		console.log("Min value is:" + min);

		arr = [1,5,90,25,-3,0]
		function printAverage(arr) {
			var sum = arr[0];
			for(var i = 1; i<arr.length; i++){
				sum += arr[i];
			}
			console.log("Average value is:" + sum/arr.length);
		}
		printAverage(arr);
	