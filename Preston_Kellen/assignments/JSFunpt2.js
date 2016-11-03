function findMin(arr){
  var min = arr[0]
  for (i = 0; i < arr.length; i++){
    if (min > arr[i]){
      min = arr[i];
    }
  }
  console.log(min)
}
findMin([1, 5, 90, 25, -3, 0])

function findAvg(arr){
  var avg = 0;
  var count = 0;
  for (i = 0; i < arr.length; i++){
    count++;
    avg += arr[i];
  }
  avg = avg/count;
  console.log(avg)
}
findAvg([1, 5, 90, 25, -3, 0])

function sum(a, b){
  var total = 0
  for(var num = a; num <= b; num++){
    total += num;
  }
console.log(total)
}
sum(1, 500)

var object = { sum : function(a, b){
  var total = 0;
  for(var num = a; num <= b; num++){
    total += num;
    }
  }, findMin : function(arr){
    var min = arr[0];
    for(var i=0; i<arr.length; i++){
      if (min > arr[i]){
        min = arr[i];
      }
    }
  console.log(min);
  },
  findAvg : function(arr){
    var avg = 0;
    var count = 0;
    for(var i = 0; i < arr.length; i++){
      count++;
      avg += arr[i];
    }
    avg = avg/count;
    console.log(avg);
  }
};
object.findMin([1, 5, 90, 25, -3, 0])
var person = {
  name: "Kellen",
  distance_traveled: 0,
  say_name: function(){
    console.log(person.name);
  },
  say_something: function(input){
    console.log(person.name, 'says;', input);
  },
  walk: function(){
    console.log(person.name, 'is walking.');
    person.distance_traveled += 3;
  },
  run: function(){
    console.log(person.name, 'is running.');
    person.distance_traveled += 10;
  },
  crawl: function(){
    console.log(person.name, 'is crawling.');
    person.distance_traveled += 1;
  }
}
