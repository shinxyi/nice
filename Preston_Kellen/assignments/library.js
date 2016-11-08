var _ = {
   map: function(arr, callback) {
     var newarr = [];
     for(var i = 0; i < arr.length; i++){
       newarr.push(callback(arr[i]));
     }
     return newarr;
   },
   reduce: function(arr, callback) {
     var value = 0;
     for(var i = 0; i < arr.length; i++){
       value += callback(arr[i]);
     }
     return value;
   },
   find: function(arr, callback) {
     var value;
     for(var i = 0; i < arr.length; i++){
       if(callback(arr[i])){
         return value = arr[i];
       }
     }
   },
   filter: function(arr, callback) {
     var newarr = [];
     for(var i = 0; i < arr.length; i++){
       if(callback(arr[i])){
         newarr.push(arr[i]);
       }
    }
     return newarr;
   },
   reject: function(arr, callback) {
     var newarr = [];
     for(var i = 0; i < arr.length; i++){
       if(callback(arr[i])){
         newarr.push(arr[i]);
     }
     }
    return newarr;
  }
}
// you just created a library with 5 methods!

var evens = _.filter([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
console.log(evens);

var maps = _.map([1, 2, 3, 4, 5, 6], function(num){ return num * 2; });
console.log(maps);

var odds = _.reject([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 1; });
console.log(odds);

var reduction = _.reduce([1, 2, 3, 4, 5, 6], function(num){ return num; });
console.log(reduction); //HELP! this works but I know I cut a corner

var finder = _.find([1, 2, 3, 4, 5, 6], function(num){ return num % 4 == 0; });
console.log(finder);
