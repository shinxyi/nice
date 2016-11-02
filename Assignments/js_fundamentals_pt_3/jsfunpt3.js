function personConstructor(name){
    person = {
        person_name: name,
        distance_travelled: 0,
        say_name: function() { alert(person['name']); },
        say_something: function(str) { alert(person['name'] + str); },
        walk: function(){
            alert(person['name'] + " is walking.");
            person['distance_travelled'] += 3;
        },
        run: function(){
            alert(person['name'] + " is running.");
            person['distance_travelled'] += 10;
        },
        crawl: function(){
            alert(person['name'] + " is crawling.");
            person['distance_travelled'] += 1;
        }
    }//end person

    return person;
};

function ninjaConstructor(name, cohort) {
    var ninja = personConstructor(name);
    ninja.cohort = cohort;
    ninja.beltLevel = "Yellow Belt";
    ninja.levelUp = function(){
        if (ninja.beltLevel == "Yellow Belt"){ ninja.beltLevel = "Red Belt" }
        else if (ninja.beltLevel == "Red Belt"){ ninja.beltLevel = "Black Belt" }
    }
};
