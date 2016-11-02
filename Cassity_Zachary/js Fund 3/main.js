

function personConstructer(name){
  var person = {
    name: name,
    distance_traveled: 0,
    say_name: function(){console.log('Your name is',person.name);},
    say_something: function(arg1){console.log(person.name,'says',arg1);},
    walk: function(){console.log(person.name,'is walking!'); person.distance_traveled = person.distance_traveled + 3;},
    run: function(){console.log(person.name,'is running!'); person.distance_traveled = person.distance_traveled + 10;},
    crawl: function(){console.log(person.name,'is crawling!'); person.distance_traveled = person.distance_traveled + 1;}
    }
    console.log(person.name);
  }
  personConstructer('jay')

function ninjaConstructor(name,cohort){
  var ninja = {
    name: name,
    cohort: cohort,
    beltlevel: 'yellow-belt',
    levelUp: function(){ninja.beltlevel = 'black-belt'; console.log('You just earned the rare',ninja.beltlevel);}
  }
}
ninjaConstructor('Zach','Dallas')
