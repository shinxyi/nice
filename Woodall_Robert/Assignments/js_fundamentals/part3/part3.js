function personConstructor(name) {
	return {
				name: name,
				distance_traveled: 0,
				sayName: function() {
					console.log(this.name);	
				},
				saySomething: function(phrase) {
					console.log(this.name, 'says', phrase);
				},
				walk: function() {
					console.log(this.name, 'is walking...');
					this.distance_traveled += 3;
				},
				run: function() {
					console.log(this.name, 'is running...');
					this.distance_traveled += 10;
				},
				crawl: function() {
					console.log(this.name, 'is crawling...');
					this.distance_traveled += 1;
				}
			};
}

function ninjaConstructor(name) {
	return {
				name: name,
				cohort: 0,
				belt_level: 'yellow belt',
				levelUp: function(newBelt) {
					this.belt_level = newBelt;	
				}
	}
}

var personObj = personConstructor('Robert');

console.log(personObj.name);
console.log(personObj.distance_traveled);
console.log(personObj.sayName());
console.log(personObj.saySomething('Let\'s do this!'));
console.log(personObj.walk());
console.log(personObj.distance_traveled);
console.log(personObj.run());
console.log(personObj.distance_traveled);
console.log(personObj.crawl());
console.log(personObj.distance_traveled);

var ninjaObj = ninjaConstructor('My Ninja');

console.log(ninjaObj.name);
console.log(ninjaObj.cohort);
console.log(ninjaObj.belt_level);
console.log(ninjaObj.levelUp('Red Belt'));
console.log(ninjaObj.belt_level);