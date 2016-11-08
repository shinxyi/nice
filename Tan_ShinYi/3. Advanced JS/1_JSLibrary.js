var _ = {
   map: function(list, callback) {
    var arr = [];
    for(var i=0; i<list.length;i++){
      arr.push(callback(list[i]));
    }
    return arr;
   },
   reduce: function(list, callback) {
     var memo=0;
     for(var i=0; i<list.length;i++){
       memo = callback(memo,list[i]);
     }
     return memo;
   },
   find: function(list, callback) {
     for(var i=0; i<list.length; i++){
       if(callback(list[i])){
         return list[i];
       }
     }

   },
   filter: function(list, callback) {
     var arr= [];
     for(var i=0; i<list.length; i++){
       if(callback(list[i])){
         arr.push(list[i]);
       }
     }
     return arr;
   },
   reject: function(list, callback) {
     var arr= [];
     for(var i=0; i<list.length; i++){
       if(!(callback(list[i]))){
         arr.push(list[i]);
       }
     }
     return arr;
   }
 }

var evens = _.filter([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
console.log(evens); // if things are working right, this will return [2,4,6].

var find = _.find([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
console.log(find);

var odds = _.reject([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
console.log(odds);

var sum = _.reduce([1, 2, 3], function(memo, num){ return memo + num; }, 0);
console.log(sum);

var multiplied = _.map([1, 2, 3], function(num){ return num * 3; });
console.log(multiplied);
