function creator(value){
  var aobj = {
    name: value,
    distance_traveled: 0,
    say_name: function(){
      console.log(personConstructor.name);
    },
    say_something: function(input){
      console.log(personConstructor.name, 'says;', input);
    },
    walk: function(){
      person.distance_traveled += 3;
      console.log(personConstructor.name, 'is walking.');
    },
    run: function(){
      console.log(personConstructor.name, 'is running.');
      person.distance_traveled += 10;
    },
    crawl: function(){
      console.log(personConstructor.name, 'is crawling.');
      person.distance_traveled += 1;
  }
}
return aobj
}
var kellen = creator('kellen')
// console.log(kellen)

// Now create a ninjaConstructor that can be used to create Ninjas that each has a name, cohort, and belt-level. Give all of the Ninjas a “levelUp” method that increases their belt-level (Have all ninjas start at a yellow-belt).

function ninjaConstructor(val){
  var aninja = {
    name: val,
    chorot: "Italian",
    beltlevel: 1,
    levelUp: function(){
      return aninja.beltlevel += 1;
    }
  }
  return aninja;
}
var kellen = ninjaConstructor('kellen');
kellen.levelUp();
console.log(kellen.beltlevel)
console.log(kellen);
