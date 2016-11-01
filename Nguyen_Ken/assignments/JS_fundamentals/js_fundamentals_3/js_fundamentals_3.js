//js fundamentals part 3
function personConstructor(name){
  var person = {
    name : name,
    distance_traveled: 0,
    say_name: function(){
                alert(person.name)
              },
    say_something: function(str){
                      alert(person.name+" says "+str)
                    },
    walk: function(){
            alert(person.name+" is walking")
            person.distance_traveled += 3
            return person.distance_traveled
          },
    run: function(){
            alert(person.name+" is running")
            person.distance_traveled += 10
            return person.distance_traveled
          },
    crawl: function(){
            alert(person.name+" is crawling")
            person.distance_traveled += 1
            return person.distance_traveled
          }
  }
  return person
}

function ninjaConstructor(name, cohort){
  var person = {
    name: name,
    cohort: cohort,
    beltLevel: "yellow",
    levelUp: function(){
                if (person.beltLevel == "yellow" ){
                  person.beltLevel = "red"
                } else
                if (person.beltLevel == "red"){
                  person.beltLevel = "black"
                }
                return person.beltLevel
              }
  }
  return person
}
