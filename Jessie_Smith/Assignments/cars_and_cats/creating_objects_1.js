function VehicleConstructor(name, number_of_wheels, number_of_passengers){
	vehicle = {};
	vehicle.name = name;
	vehicle.number_of_wheels = number_of_wheels;
	vehicle.number_of_passengers = number_of_passengers;
	vehicle.makeNoise = function(){
		console.log("The " + vehicle.name + "says beep");
	};
	return vehicle;
}
var bike = VehicleConstructor("bike", 2, 1);
bike.makeNoise = function(){
	console.log("The " + vehicle.name + "says ring ring");
};
var sedan = VehicleConstructor("sedan", 4, 5);
sedan.makeNoise = function(){
	console.log("The " + vehicle.name + "says honk honk");
};
var bus = VehicleConstructor("bus", 4, 20);
bus.addPassengers = function(x){
	bus.number_of_passengers += x;
};
bus.addPassengers(3);
console.log(bus.number_of_passengers);