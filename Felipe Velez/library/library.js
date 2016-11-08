function each(arr, callback){
    for(var i = 0; i < arr.length; i++){
        callback(arr[i]);
    }
}

var _ ={
    map: function(arr, iteratee){
        //code here
        var newarr = [];
         for(var i = 0; i < arr.length; i++){
             newarr.push(iteratee(arr[i]));
         }
        return newarr;
    },
    
    reduce: function(list, iteratee,memo){
    //code here
         for(var i = 0; i < list.length; i++){
             memo = (iteratee(memo, list[i]));
         }
        return memo
    },
    find: function(list,predicate){
        var val;
         for(var i = 0; i < list.length; i++){
             
             val = predicate(list[i]);
             if (val == true){
                 return list[i];
             }
         }
        
    },
    filter: function(list, predicate){
         var val = [];
         for(var i = 0; i < list.length; i++){
             
//             val = predicate(list[i]);
             if (predicate(list[i])){
                 val.push(list[i]);
             }
              
         }
        return val;
    },
    reject: function(list, predicate){
         var val = [];
         for(var i = 0; i < list.length; i++){
             
//             val = predicate(list[i]);
             if (predicate(list[i])==false){
                 val.push(list[i]);
             }
              
         }
        return val;
    }
}
console.log("________________MAP__________________")    
var evenMap = _.map([1, 2, 3], function(num){return num * 3});
console.log(evenMap);

console.log("________________REDUCE__________________") 
var redu = _.reduce([1, 2, 3], function(memo, num){return memo + num}, 0);
console.log(redu);

console.log("________________FIND__________________") 
var predic = _.find([1, 5, 8], function(num){
    return num % 2 == 0;
});
console.log(predic);

console.log("________________FILTER__________________") 
var filterArray = _.filter([1, 2, 8, 4],function(num){return num % 2 == 0});
console.log(filterArray);

console.log("________________reject__________________") 
var rejectArray = _.reject([1, 2, 3, 4],function(num){return num % 2 == 0});
console.log(rejectArray);