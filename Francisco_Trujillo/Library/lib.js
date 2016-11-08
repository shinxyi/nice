

var _ = {
	map: function(arr, iteratee){
		var newArr = [];
		for(var i= 0; i<arr.length; i++){
			
			newArr.push(iteratee(arr[i]));
		}
		return newArr;
		
	},
	reduce: function(arr, iteratee, memo){
		
		for(var i= 0; i<arr.length; i++){
			
			memo = (iteratee(memo,arr[i]));
		}
		return memo;
	},
	find: function(arr, predicate){
		var result;
		for(var i= 0; i<arr.length; i++){
			
			result = predicate(arr[i]);
			if (result){return arr[i];}
		}

	},
	filter: function(arr, predicate){
		
		var neArr =[];
		for(var i= 0; i<arr.length; i++){
			
			if(predicate(arr[i])){
				neArr.push(arr[i]);
			}
			
		}
		return neArr;
	},
	reject: function(arr, predicate){
		var neArr =[];
		for(var i= 0; i<arr.length; i++){
			
			if(!predicate(arr[i])){
				neArr.push(arr[i]);
			}
			
		}
		return neArr;
	}
};

var arr = _.map([1,3,5], function(num){return num * 3;});
console.log(arr);

var red = _.reduce([1,2,3], function(memo, num){return memo + num;}, 0);
console.log(red);
var finder = _.find([3,2,5,3], function(num){return num % 2 === 0;});
console.log(finder);
var filt = _.filter([2,6,83,80,3,5,3], function(num){return num % 2 === 0;});
console.log(filt);

var rej = _.reject([2,6,83,80,3,5,3], function(num){return num % 2 === 0;});
console.log(rej);