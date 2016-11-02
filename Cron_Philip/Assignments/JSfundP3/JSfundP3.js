function personConstructor(name) {

  var simPerson = {
    name: name,
    distance_traveled: 0,
    say_name: function(){
      console.log(this.name)
    },
    say_something: function(){
      console.log(this.name, "says I am so cool!" )
    },
    walk: function(){
      console.log(this.name, "is walking")
      this.distance_traveled = this.distance_traveled + 3;
    },
    run: function(){
      console.log(this.name, "is running")
      this.distance_traveled = this.distance_traveled + 10;
    },
    crawl: function(){
      console.log(this.name, "is crawling")
      this.distance_traveled = this.distance_traveled + 1;
    }
  }
  return simPerson;
}
philip = personConstructor('Philip');
philip.say_name();
philip.say_something();
philip.walk();
philip.run();
philip.crawl();

function ninjaConstructor(name, cohort) {

  var ninja = {
    belts: ['yellow-belt', 'red-belt', 'black-belt'],
    name: name,
    cohort: cohort,
    beltLevel: 0,
    say_name: function(){
      console.log(this.name)
    },
    say_something: function(){
      console.log(this.name, "says I am so cool!" )
    },
    walk: function(){
      console.log(this.name, "is walking")
      this.distance_traveled = this.distance_traveled + 3;
    },
    run: function(){
      console.log(this.name, "is running")
      this.distance_traveled = this.distance_traveled + 10;
    },
    crawl: function(){
      console.log(this.name, "is crawling")
      this.distance_traveled = this.distance_traveled + 1;
    },
    levelUp: function(){
      if (this.beltLevel < 2) {
        this.beltLevel += 1;
        this.belt = this.belts[this.beltLevel];
      }
      return ninja;
    }
  }
  return ninja;
}
authman = ninjaConstructor('Authman');
cohort = ninjaConstructor('MEAN')
authman.say_name();
authman.say_something();
authman.levelUp(),authman.levelUp();
