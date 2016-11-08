function personConstructor(name= "Jay") {

  var person = {
    name: name,
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

  return person;
}

var newHuman = personConstructor("ShinYi");

function ninjaConstructor(name, cohort) {
  var ninja={
    name: name,
    cohort: cohort,
    belt_level: "yellow",
    levelUp: function(){
      console.log('Leveling Up');
      if( ninja.belt_level == "yellow"){ ninja.belt_level= "red";}
      else if (ninja.belt_level == "red"){ ninja.belt_level= "black";}
    }
  }
  return ninja;
}

var newNinja = ninjaConstructor("ShinYi", "Dallas");
console.log(newNinja.belt_level);
newNinja.levelUp();
console.log(newNinja.belt_level);
newNinja.levelUp();
console.log(newNinja.belt_level);
