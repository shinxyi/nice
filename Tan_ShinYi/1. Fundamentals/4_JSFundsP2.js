//Create a simple for loop that sums all the integers between x and y (inclusive). Have it console log the final sum.
var summing = function (x,y){
  var sum=0;
  for(var i=x; i<=y;i++){
    sum+=i;
  }
  console.log(sum);
}

summing(1,5);

//Write a loop that will go through an array, find the minimum value, and then return it
var min = function (arr){
  var min=0;
  for (var i=1; i<arr.length; i++){
    if(arr[i]<arr[min]){
      min=i;
    }
  }
  return arr[min];
}

console.log(min([5,2, -10, 9, -13, 2]));

//Write a loop that will go through an array, find the average of all of the values, and then return it
var avg = function (arr){
  var sum=0;
  for (var i=0;i<arr.length; i++){
    sum+=arr[i];
  }
  return sum/arr.length;
}

console.log(avg([1,2,3,4,5]));

//Rewrite these as methods of an object

var myFunctions = {
  summing : function (x,y){
    var sum=0;
    for(var i=x; i<=y;i++){
      sum+=i;
    }
    console.log(sum);
  },
  min : function (arr){
    var min=0;
    for (var i=1; i<arr.length; i++){
      if(arr[i]<arr[min]){
        min=i;
      }
    }
    return arr[min];
  },
  avg : function (arr){
    var sum=0;
    for (var i=0;i<arr.length; i++){
      sum+=arr[i];
    }
    return sum/arr.length;
  }
}

myFunctions.summing(1,5);
console.log(myFunctions.min([5,2, -10, 9, -13, 2]));
console.log(myFunctions.avg([1,2,3,4,5]));

var person = {
  name: "ShinYi",
  distance_traveled: 0,
  say_name: function(){ console.log(this.name); },
  say_something: function(something){ console.log(this.name + " says " + something); },
  walk : function(){
    console.log(this.name + " is walking");
    this.distance_traveled +=3;
  },
  run: function(){
    console.log( this.name + " is runing");
    this.distance_traveled +=10;
  },
  crawl: function(){
    console.log(this.name + " is crawling");
    this.distance_traveled +=1;
  }
}

person.say_name();
person.say_something("how fun!");
person.walk();
person.crawl();
person.run();
console.log(person.distance_traveled);
