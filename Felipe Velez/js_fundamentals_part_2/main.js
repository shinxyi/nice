"use strict";
function sumBetween_x_y(x,y){
    if(x > y){
        var stop = "x need to be less than y";
        return stop;
    }
    var sum = 0;
    for(var i = x;i <= y;i++){
        sum += i;
    }
    console.log(sum)
}
console.log(sumBetween_x_y(7, 5));

console.log("_________________________")
function minVal(arr){
    var min = 0;
    for(var i = 0; i < arr.length; i++){
        if(min > arr[i]){
            min = arr[i];
        }
    }
    return min;
}

console.log(minVal([1,3,9, -1]));


console.log("_________________________")
function average(arr){
    var sum = 0;
    var count = 0;
    for(var i = 0; i < arr.length; i++){
        sum += arr[i];
        count ++
    }
    var average = sum/count;
    return average;
}

console.log(average([1,3,5,7,50,-1]));

console.log("_________________________")
var sumBetweenxy = function(x,y){
    if(x > y){
        var stop = "x need to be less than y";
        return stop;
    }
    var sum = 0;
    for(var i = x;i <= y;i++){
        sum += i;
    }
    return(sum);
}
console.log(sumBetweenxy(1,3));

console.log("_________________________");
var minVal = function(arr){
    var min = 0;
    for(var i = 0; i < arr.length; i++){
        if(min > arr[i]){
            min = arr[i];
        }
    }
    return (min);
}

console.log(minVal([1,3,9, -5]));

console.log("_________________________");

var average = function(arr){
    var sum = 0;
    var count = 0;
    for(var i = 0; i < arr.length; i++){
        sum += arr[i];
        count ++
    }
    var average = sum/count;
    return average;
}

console.log(average([1,3,5,7,50,-1]));

console.log("_________________________")

var object = {
    sumBetweenxy: function(x,y){
                    if(x > y){
                    var stop = "x need to be less than y";
                    return stop;
                    }       
                    var sum = 0;
                    for(var i = x;i <= y;i++){
                        sum += i;
                    }
                    return(sum);
},
minVal: function(arr){
            var min = 0;
            for(var i = 0; i < arr.length; i++){
                if(min > arr[i]){
                    min = arr[i];
                }
            }
            return (min);
            },
average: function(arr){
            var sum = 0;
            var count = 0;
            for(var i = 0; i < arr.length; i++){
                sum += arr[i];
                count ++
            }
            var average = sum/count;
            return average;
            }
}
console.log(object.sumBetweenxy(1,2), object.minVal([1,3,5,7,50,-1]), object.average([1,3,5,7,50,-1]));


console.log("_________________________")

var person = {
    name: "Felipe",
    distance: 0,
    say_name: function(){console.log(this.name)},
    say_something: function(){console.log(this.name,": I am cool")},
    walk: function(){this.distance = 3 + this.distance;
        console.log(this.name, "is walking", this.distance);
                    },
    run: function(){this.distance = this.distance + 10;
                    console.log(this.name, "is running", this.distance)},
    crawl: function(){this.distance = this.distance + 1;
                    console.log(this.name, "is crawling", this.distance)}
}
person.say_name();
person.say_something();
person.walk();
person.run();
person.crawl();

