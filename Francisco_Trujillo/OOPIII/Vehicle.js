function Vehicle(name, wheels, passenger, speed){
	var distance_travelled = 0;
	 this.updateDistanceTravelled = function(speed){
		distance_travelled += speed;
		
	}
	
	this.name = name;
	this.wheels = wheels; // number of wheels
	this.passenger = passenger;
	this.speed = speed;	
	this.checkMiles =  function(){
		console.log(distance_travelled)
	}
	
}
Vehicle.prototype.ranVin =  function(){
	vin = Math.floor(Math.random()*1000000);
	console.log(vin);
}
Vehicle.prototype.makeNoise= function(noise){
		console.log(this.name, noise);
	};

Vehicle.prototype.move =  function(noise){
		this.updateDistanceTravelled(this.speed);
		this.makeNoise(noise);
	}

var bike = new Vehicle('Bike', 2, 1, 20);
bike.move('Ring Ring');
bike.move('Ring Ring');
bike.checkMiles();
bike.ranVin();

var sedan = new Vehicle('Sedan', 4, 4);
sedan.makeNoise("Honk, honk");

var bus = new Vehicle('Bus', 4, 18);
bus.passengers = function(extrapassenger){ 
	this.passenger+= extrapassenger;

};

bus.passengers(20);
console.log(bus.passenger)

