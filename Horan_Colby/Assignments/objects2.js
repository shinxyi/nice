function VehicleConstructor(name, wheels, passengers, speed){
	var self = this
	var distance_travelled = 0
	var updateDistance = function(){ distance_travelled += self.speed}
	this.name = name
	this.wheels = wheels
	this.passengers = passengers
	this.makeNoise = function(){console.log('Vroom Vroom')}
	this.speed = speed
	this.move = function(){
		updateDistance()
		this.makeNoise()
	}
	this.checkMiles = function(){ console.log(distance_travelled)}
}
var Bike = new VehicleConstructor("Rudy", 2, 1, 20)
Bike.makeNoise = function(){console.log('ring ring')}


var Sedan =  new VehicleConstructor('Thunder Dan', 4, 4, 90)
Sedan.makeNoise = function(){console.log('Honk Honk!')}


var Bus = new VehicleConstructor('Bussy', 4, 30, 70)
Bus.addPass = function(pickup){
	passengers += pickup
}



