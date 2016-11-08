function Vehicle(name, numWheels, numPassengers, speed) {
	/* private */
	var distanceTraveled = 0;
	
	var updateDistanceTraveled = function (speed) {
		distanceTraveled += speed;	
	};
	
	/* public */
	this.name = name;
	this.numWheels = numWheels;
	this.numPassengers = numPassengers;
	this.speed = speed;
	
	this.makeNoise = function () {
		console.log('making some noise...');
	};
	
	this.move = function () {
		this.makeNoise();
		updateDistanceTraveled(this.speed);
	};
	
	this.checkMiles = function () {
		console.log(distanceTraveled);
	};
}

var bike = new Vehicle('Jimmy', 2, 2, 20);
bike.checkMiles();
bike.move();
bike.checkMiles();
