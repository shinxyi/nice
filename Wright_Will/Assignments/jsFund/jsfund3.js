function personConstructor(name){
    var person = {
        name: name,
        distance_traveled: 0,
        say_name: function(){
            console.log(this.name)
            return  this
        },
        say_something: function(something){
            console.log(something)
            return this
        },
        walk: function(){
            console.log(this.name + " is walking")
            this.distance_traveled += 3
            return this
        },
        run: function(){
            console.log(this.name + " is running")
            this.distance_traveled += 10
            return this
        },
        crawl: function(){
            console.log(this.name + " is crawling")
            this.distance_traveled += 1
            return this
        }



    }
    return person
}

function ninjaConstructor(name){
    person = personConstructor(name)
    person["belt_level"] = 1
    person['levelUp'] = function(){
        this.belt_level += 1
        return this
    }
    return person
}


var bob = personConstructor("bob")
var fred = ninjaConstructor("fred")
fred.say_name()
