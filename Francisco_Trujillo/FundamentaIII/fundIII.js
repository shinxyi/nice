function personConstructor(name){
        var person = {
    name: name,
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
    
};
    return person;
}
Jay = personConstructor("Jay")
Jay.run();

Jay.say_name();

function ninjaConstructor(name){
    var ninja = {
        name:name,
        belt : 'Yellow belt',
        cohort: function(cohort){console.log(this.name, "ninja belogs to cohort ", cohort, 'and has a ', this.belt);},
        levelUp: function(){
            this.belt = 'Black belt';
            console.log(this.name, "has been level up to ", this.belt);        
        }
    
        };
	return ninja;
}

Francisco = ninjaConstructor('Francisco');
Francisco.cohort('MEAN');
Francisco.levelUp();
