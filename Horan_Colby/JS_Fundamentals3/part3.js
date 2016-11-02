var person = {
	name : 'Colby',
	distance_travelled : 0,
	say_name : function(){ console.log(person.name) },
	say_something : function(something){
		console.log(person.name, + 'says' + something)
	},
	walk : function(){
		console.log(person.name, 'is walking')
		person.distance_travelled += 3
	},
	run : function(){
		console.log(person.name, 'is running')
		person.distance_travelled += 10
	},
	crawl : function(){
		console.log(person.name, 'is crawling')
		person.distance_travelled += 1
	}
}

function personConstructor(name){
	var person = {
		name : name,
		distance_travelled : 0,
		say_name : function(){ console.log(person.name) },
		say_something : function(something){
			console.log(person.name + ' says ' + something) },
		walk : function(){
			console.log(person.name + ' is walking')
			person.distance_travelled += 3 },
		run : function(){
			console.log(person.name + ' is running')
			person.distance_travelled += 10 },
		crawl : function(){
			console.log(person.name + ' is crawling')
			person.distance_travelled += 1 }
	}
	console.log(person.name)
	person.say_something('YAS YAS YAS YAS')
}


function ninjaConstructor(name){
	var ninja = {
		name : name,
		cohort : 'September 19th, 2016',
		belt : 'yellow-belt',
		levelUp : function(){
			if (ninja.belt == 'yellow-belt'){
				ninja.belt = 'red-belt'
			}
			else if (ninja.belt == 'red-belt'){
				ninja.belt = 'black-belt'
			}
			else if (ninja.belt == 'black-belt'){
				ninja.belt = 'double black-belt'
			}
			else if (ninja.belt == 'double black-belt'){
				ninja.belt = 'triple black-belt'
			}
		}
	}
	console.log(ninja.name)
	console.log(ninja.cohort)
	console.log(ninja.belt)
	ninja.levelUp()
	console.log(ninja.belt)
	ninja.levelUp()
	console.log(ninja.belt)
	ninja.levelUp()
	console.log(ninja.belt)
	ninja.levelUp()
	console.log(ninja.belt)
}

ninjaConstructor('Zooey')
