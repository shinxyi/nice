function person(name){
    var person ={
        name: name,
        distance: 0,
        say_name: function(){console.log(this.name)},
        say_something: function(){console.log(this.name,": I am cool")},
        walk:function(){this.distance = 3 + this.distance;
        console.log(this.name, "is walking", this.distance);
                    },
        run:function(){this.distance = this.distance + 10;
                    console.log(this.name, "is running", this.distance)},
        crawl:function(){this.distance = this.distance + 10;
                    console.log(this.name, "is crawling", this.distance)},
    }
    return person;
}

Jay = person('Jay');


Jay.say_name();
Jay.say_something();
Jay.walk();
Jay.run();
Jay.crawl();


//var ninja = {
//  name:'Susanna',
//  MEAN_belt:10,
//  iOS_belt:10,
//  python_belt:10,
//  php_belt:9, // she hadn't mastered deploying yet!
//  ruby_belt:9.75 // done in 1.5 hrs though!
//}
//for (var key in ninja) {
//  if (ninja.hasOwnProperty(key)) {
//    console.log(key);
//    console.log(ninja[key]);
//  }
//}

//function kittenConstructor(name){
//    this.name = name;
//    this.meow = function(){console.log('meow')}       
//}
//var kitten = new kittenConstructor('Cutie')

console.log('__________________________________________')

function ninjaConstructor(name){
    var ninja ={
        name: name,
        say_name: function(){console.log(this.name)},
        cohort: function(){console.log("MEAN")},
        belt_level: function(){console.log('yellow_belt')},
        level_up:function(){
        this.belt_level = "black_belt";
        console.log('this.name', 'has been level up to:', this.belt_level)
        },
    };
return ninja;
}
var Lisa = ninjaConstructor('Lisa');
Lisa.say_name();
Lisa.cohort();
Lisa.belt_level();
Lisa.level_up();









