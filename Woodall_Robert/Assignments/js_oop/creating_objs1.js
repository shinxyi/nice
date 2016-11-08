function VehicleConstructor(name, numWheels, numPassengers) {
	this.name = name;
	this.numWheels = numWheels;
	this.numPassengers = numPassengers;
	
	this.makeNoise = function () {
		console.log('making some noise...');
	}
}

var bike = new VehicleConstructor('Jimmy', 2, 2);
bike.makeNoise();
bike.makeNoise = function () { 
	console.log('ring ring!'); 
};
bike.makeNoise();

var sedan = new VehicleConstructor('Accord', 4, 5);
sedan.makeNoise();
sedan.makeNoise = function () {
	console.log('honk honk!');
};

var bus = new VehicleConstructor('DART', 4, 0);
bus.pickUp = function (num_to_pickup) {
	this.numPassengers += num_to_pickup;
};
console.log(bus.numPassengers);
bus.pickUp(30);
console.log(bus.numPassengers);
