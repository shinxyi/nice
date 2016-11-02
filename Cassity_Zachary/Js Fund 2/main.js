// function loop(arg1,arg2){
//   sum = 0
//   for(arg1; arg1<= arg2; arg1++){
//     sum = sum + arg1
//   }
//   console.log(sum);
// }
//
//
//
// function min(){
//   var arr = [100,500,200,-3,450,1];
//   var min = arr[0]
//   for (var i = 0; i < arr.length; i++){
//     if (min > arr[i]) {
//       min = arr[i]
//     }
//   };
//   console.log(min);
// }
//
// function avg(){
//   var arr = [1,2,3,4,5];
//   var sum = 0
//   var avg = arr.length
//   for(i = 0; i < arr.length; i++){
//     sum = sum + arr[i];
//   }
//   console.log(sum/avg)
// }
var person = {
  name: 'Zach',
  distance_traveled: 0,
  say_name: function(){console.log('Your name is',person.name);},
  say_something: function(arg1){console.log(person.name,'says',arg1);},
  walk: function(){console.log(person.name,'is walking!'); person.distance_traveled = person.distance_traveled + 3;},
  run: function(){console.log(person.name,'is running!'); person.distance_traveled = person.distance_traveled + 10;},
  crawl: function(){console.log(person.name,'is crawling!'); person.distance_traveled = person.distance_traveled + 1;}
}
console.log(person.say_something('idk what im doing'));
console.log(person.run());
console.log(person.crawl());
console.log(person.distance_traveled);
