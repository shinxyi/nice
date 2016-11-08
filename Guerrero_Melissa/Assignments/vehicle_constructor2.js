function VehicleConstructor(name, numWheels, numPass, speed){
	var vehicle = {};
	var distanceTraveled = 0;
	vehicle.name = name;
	vehicle.numWheels = numWheels;
	vehicle.numPass = numPass;
	vehicle.speed = speed;
	vehicle.makeNoise = function(){
		console.log("Vroom vroom!");
	}
	function updateDistanceTraveled(){
		distanceTraveled += vehicle.speed;
		console.log(distanceTraveled);
	}
	return vehicle;
}

vehicle.move = function(){
	vehicle.makeNoise();
	updateDistanceTraveled();
	};

vehicle.checkMiles = function(){
	console.log(distanceTraveled);
}


var Bike = VehicleConstructor("Bike", 2, 1);
Bike.makeNoise = function(){
	console.log("Ring ring!");
	}
Bike.makeNoise();

var Sedan = VehicleConstructor("Sedan", 4, 4);
Sedan.makeNoise = function(){
	console.log("Honk honk!");
}
Sedan.makeNoise();

var Bus = VehicleConstructor("Bus", 4, 20);
Bus.pickUp = function(riders, count){
	return count + riders;
}

console.log(Bus.pickUp(10, 10));