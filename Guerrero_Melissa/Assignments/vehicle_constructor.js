function VehicleConstructor(name, numWheels, numPass){
	var vehicle = {};
	vehicle.name = name;
	vehicle.numWheels = numWheels;
	vehicle.numPass = numPass;
	vehicle.makeNoise = function(){
		console.log("Vroom vroom!");
	}
	return vehicle;
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