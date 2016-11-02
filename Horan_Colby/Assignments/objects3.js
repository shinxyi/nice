function VehicleConstructor(name, wheels, passengers, speed){
	this.name = name
	this.wheels = wheels
	this.passengers = passengers
	this.speed = speed
}

VehicleConstructor.prototype.makeNoise = function(){console.log('Vroom Vroom')}
VehicleConstructor.prototype.checkMiles = function(){ console.log(distance_travelled)}
VehicleConstructor.prototype.distance_travelled = 0
VehicleConstructor.prototype.updateDistance = function(){ this.distance_travelled += this.speed}
VehicleConstructor.prototype.move = function(){
		this.updateDistance()
		this.makeNoise()
}
VehicleConstructor.prototype.checkMiles = function(){ console.log(this.distance_travelled)}
VehicleConstructor.prototype.vin = Math.floor((Math.random() * 100000000000000000) + 1)


var Bike = new VehicleConstructor("Rudy", 2, 1, 20)
Bike.makeNoise = function(){console.log('ring ring')}


var Sedan =  new VehicleConstructor('Thunder Dan', 4, 4, 90)
Sedan.makeNoise = function(){console.log('Honk Honk!')}


var Bus = new VehicleConstructor('Bussy', 4, 30, 70)
Bus.addPass = function(pickup){
	passengers += pickup
}
Bike.move()
Bike.checkMiles()
Bike.move()
Bike.move()
Bike.checkMiles()

console.log(Bike.vin)




