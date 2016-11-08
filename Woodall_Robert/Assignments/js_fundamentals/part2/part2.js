var mathObj = {
	sumBetween: function(start, end) {
					var sum = 0;

					for (var i = start; i <= end; i++) {
						sum += i;
					}

					console.log(sum);
				},
	findMin: function(myArr) {
				if (myArr.length < 1) {
					return -1;
				}

				var min = myArr[0];

				for (var i = 0; i < myArr.length; i++) {
					min = myArr[i] < min ? myArr[i] : min;
				}

				return min;
			},
	avg: function(myArr) {
			var sum = 0;

			for (var i = 0; i < myArr.length; i++) {
				sum += myArr[i];
			}

			return sum / myArr.length;
		}
};

mathObj.sumBetween(1, 5);
console.log(mathObj.findMin([-10,0,10]));
console.log(mathObj.avg([1,2,3,4,5]));

var personObj = {
	name: 'Robert',
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
