function VehicleContructor(name, wheels, passenger, speed){
	var distance_travelled = 0;
	var updateDistanceTravelled = function(speed){
		distance_travelled += speed;
		
	}
	
	this.name = name;
	this.wheels = wheels; // number of wheels
	this.passenger = passenger;
	this.speed = speed;
	this.makeNoise= function(noise){
		console.log(this.name, noise);
	};
	this.move =  function(noise){
		updateDistanceTravelled(this.speed);
		this.makeNoise(noise);
	}
	this.checkMiles =  function(){
		console.log(distance_travelled)
	}
	
}

var bike = new VehicleContructor('Bike', 2, 1, 20);
bike.makeNoise('RING RING');
bike.move('Ring Ring');
bike.checkMiles();


var sedan = new VehicleContructor('Sedan', 4, 4);
sedan.makeNoise("Honk, honk");

var bus = new VehicleContructor('Bus', 4, 18);
bus.passengers = function(extrapassenger){ 
	this.passenger+= extrapassenger;

};

bus.passengers(20);
console.log(bus.passenger)

