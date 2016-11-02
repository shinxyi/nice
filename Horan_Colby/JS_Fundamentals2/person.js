var person = {
	name : 'Colby',
	distance_travelled : 0,
	say_name : function(){ console.log(person.name) },
	say_something : function(x){
		console.log(person.name, + 'says' + x)
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

person.walk()
person.crawl()
person.run()
console.log(person.distance_travelled)