function personConstructor(name){
	var person = {
		name :name,
		distance_traveled:0,
		walk: function(){console.log(this.name+ 'is walking', distance_traveled+=3)},
		run: function(){console.log(this.name+ 'is running', distance_traveled+=10)},
		crawl: function(){console.log(this.name+ 'is crawling', distance_traveled+=1)},
		say_something : function(say) {console.log(this.name +' '+'says'+' '+ say)}
	} 
	return person
}
	i = new personConstructor('Shaz')
	i.say_something('I am cool')

function ninjaConstructor(name,cohort){
		var ninja = {
		name:name,
		cohort:cohort,
		belt_level:'yellow_belt',
		level_up: function(){
			this.belt_level='black-belt'}
		}
		return ninja
	}
var q = new ninjaConstructor('Shaz','september')
q.level_up()
q.name
q.cohort
console.log(q.belt_level)