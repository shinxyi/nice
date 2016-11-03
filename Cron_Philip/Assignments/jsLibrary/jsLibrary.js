"use strict";
var _ = {
   map: function(list, iteratee) {
    var newList = [];

    for (var index in list) {
      newList.push(iteratee(list[index], index, list))
    }
    return newList;

   },
   reduce: function(list, iteratee, memo) { 
     memo = memo !== undefined ? memo : 0;

     for (var index in list) {
      memo = iteratee(list[index], index, list, memo)
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
    for (var index in list){
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
// you just created a library with 5 methods!
console.log(_.map([1, 2, 3,], function(num, index, list){ return num * 3; }));
console.log(_.reduce([1, 2, 3], function(num, index, list, memo){ return memo + num; }, 0));
console.log(_.find([1, 2, 3, 4, 5,], function(num){ return num % 2 == 0; }));
console.log(_.filter([1, 2, ,3, 4, 5, 6], function(num){return num % 2 == 0; }));
console.log(_.reject([1, 2, ,3, 4, 5, 6], function(num){return num % 2 == 0; }));
