function PersonConstructor(name){
	var person = {
	name : name,
	distance_traveled : 0,
	say_name : function(){
		console.log(person.name);
	}
	say_something : function(param){
		console.log("${person.name} says: ${param}");
	}
	walk : function(){
		console.log("${person.name} is walking");
		person.distance_traveled += 3;
		return person;
	}
	run : function(){
		console.log("${person.name} is running");
		person.distance_traveled += 10;
		return person;
	}
	crawl : function(){
		console.log("${person.name} is crawling");
		distance_traveled += 1;
		return person;
	}
	}//end object
}//end function

function NinjaConstructor(name, cohort){
		var ninja = {
		name : name;
		cohort : cohort;
		belt-level : "yellow";
		levelUp : function(){
			belt-level += 1;
			}
		}
	}