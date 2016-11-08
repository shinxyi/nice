"use strict";

var _ = {
	map: function(list, iteratee) {
		var newList = [];
		
		for	(var index in list) {
			newList.push(iteratee(list[index], index, list));
		}	
		
		return newList;
	},
	reduce: function(list, iteratee, memo) {
		memo = memo !== undefined ? memo : 0;
		
		for (var index in list) {
			memo = iteratee(list[index], index, list, memo);
		}
		
		return memo;		
	},
	find: function(list, predicate) {		
		for (var index in list) {
			if (predicate(list[index])) {
				return list[index];
			}
		}
		
		return undefined;
	},
	filter: function(list, predicate) {
		var newList = [];
		
		for (var index in list) {
			if (predicate(list[index])) {
				newList.push(list[index]);
			}
		}
		
		return newList;
	},
	reject: function(list, predicate) {
		var newList = [];
		
		for (var index in list) {
			if (!predicate(list[index])) {
				newList.push(list[index]);
			}
		}
		
		return newList;
	},
};

console.log('Map:', _.map([1,2,3], function(num) { return num * 3; }));
console.log('Reduce:', _.reduce([1,2,3], function(num, index, list, memo) { return memo + num; }));
console.log('Find (success):', _.find([1,2,3,4], function(num) { return num % 2 === 0; }));
console.log('Find (fail):', _.find([1,3,5], function(num) { return num % 2 === 0; }));
console.log('Filter:', _.filter([1,2,3,4,5,6], function(num) { return num % 2 === 0; }));
console.log('Reject:', _.reject([1,2,3,4,5,6], function(num) { return num % 2 === 0; }));