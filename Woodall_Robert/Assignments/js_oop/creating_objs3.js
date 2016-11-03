function Vehicle(name, numWheels, numPassengers, speed) {
	/* public */
	this.name = name;
	this.numWheels = numWheels;
	this.numPassengers = numPassengers;
	this.speed = speed;
	this.distanceTraveled = 0;
	this.vin = Math.floor(Math.random() * (999999 - 100000) + 100000);
}

Vehicle.prototype.printInfo = function() {
	console.log('name: ' + this.name);
	console.log('numWheels: ' + this.numWheels);
	console.log('numPassengers: ' + this.numPassengers);
	console.log('speed: ' + this.speed);
	console.log('distanceTraveled: ' + this.distanceTraveled);
	console.log('vin: ' + this.vin);
	console.log('\n');
};

Vehicle.prototype.updateDistanceTraveled = function() {
	this.distanceTraveled += this.speed;
	return this;
};

Vehicle.prototype.makeNoise = function() {
	console.log('making some noise...');
	return this;
};

Vehicle.prototype.move = function() {
	this.updateDistanceTraveled(this.speed);
	return this;
};

Vehicle.prototype.checkMiles = function() {
	console.log(this.distanceTraveled);
	return this;
};

var bike = new Vehicle('Jimmy', 2, 2, 20);

bike.printInfo();
bike.move();
bike.printInfo();

