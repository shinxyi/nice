function VehicleContructor(name, wheels, passenger){
	var vehicle = {};
	vehicle.name = name;
	vehicle.wheels = wheels; // number of wheels
	vehicle.passenger = passenger;
	
	vehicle.makeNoise= function(noise){
		console.log(vehicle.name, noise)
	}
	
	return vehicle;
}

var bike = VehicleContructor('Bike', 2, 1);
bike.makeNoise('RING RING');

var sedan = VehicleContructor('Sedan', 4, 4);
sedan.makeNoise("Honk, honk");

var bus = VehicleContructor('Bus', 4, 18);
bus.passengers = function(extrapassenger){ 
	bus.passenger+= extrapassenger;
	return bus
};

bus.passengers(20);
console.log(bus.passenger)

