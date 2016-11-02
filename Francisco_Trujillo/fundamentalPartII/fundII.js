"use strict";
function sumBetween(x, y){
    var sum = 0;
    if( x > y){
        return console.log(' X cannot be greater than Y');
        
    }
    for (var i = x; i<=y; i++){
        sum+=i;
    }
    return sum;
}

console.log(sumBetween(12,4500));

function minimum(arr){
    var min = 0;
    for(var i = 0; i < arr.length; i++){
        if (arr[i] < min){
            min = arr[i];
        }
        
    }
    return min;
}
 console.log(minimum([1,4,7,9,134,0,-9]))
 
 function average(arr){
     var avg = 0;
     for(var i =0; i<arr.length; i++){
         avg += arr[i];
     }
     return avg/arr.length;
 }

console.log(average([1,5,2,6,8,10]))


var sumbetween = function(x,y){
    var sum = 0;
    if( x > y){
        return console.log(' X cannot be greater than Y');
        
    }
    for (var i = x; i<=y; i++){
        sum+=i;
    }
    return sum;
}
console.log(sumbetween(34,89));

var minimums = function (arr){
    var min = 0;
    for(var i = 0; i < arr.length; i++){
        if (arr[i] < min){
            min = arr[i];
        }
        
    }
    return min;
}
 console.log(minimums([1,90,7,9,134,0,-9]));

var averages = function (arr){
     var avg = 0;
     for(var i =0; i<arr.length; i++){
         avg += arr[i];
     }
     return avg/arr.length;
 }

console.log(averages([9,8,6,34,900]))

var object = {
    sumbetween: function(x,y){
                var sum = 0;
                if( x > y){
                    return console.log(' X cannot be greater than Y');
        
                    }
                for (var i = x; i<=y; i++){
                    sum+=i;
                    }
                return sum;
                },
    minimum : function (arr){
                var min = 0;
                for(var i = 0; i < arr.length; i++){
                    if (arr[i] < min){
                    min = arr[i];
                }
        
                }
                return min;
                }, 
    average: function (arr){
                var avg = 0;
                for(var i =0; i<arr.length; i++){
                    avg += arr[i];
                }
                return avg/arr.length;
                }
};

console.log(object.sumbetween(30,34), object.minimum([90, 5, 43]), object.average([45,86,23]));

var person = {
    name: 'Francisco',
    distance: 0,
    say_name: function(){console.log(this.name)},
    say_something: function(para){console.log(this.name, " says ", para);},
    walk: function(){
            this.distance +=  3; 
            console.log(this.name, " is walking", this.distance);
        },
    
    run: function(){
            this.distance +=  10; 
            console.log(this.name, " is running", this.distance);
        },
    crawl: function(){
            this.distance +=  1; 
            console.log(this.name, " is crawl", this.distance);
}
}
    
person.say_something('I am cool');
person.walk();
person.run();
person.crawl();

