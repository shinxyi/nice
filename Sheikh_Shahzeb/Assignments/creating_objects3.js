function VehicleConstructor(name, wheels, passengers, noise, speed){
	var distance_traveled = 0;
	this.name=name
	this.wheels= wheels
	this.passengers = passengers
	this.speed = speed
	var update_distance_traveled = function(){
		distance_traveled+=speed;
	}
	this.get_distance= function(){
		return distance_traveled
	}
	this.check_miles= function(){
		console.log(distance_traveled)
	}
	this.makenoise = function(){
		console.log(noise)
	}
	this.move = function(){
		update_distance_traveled()
		this.makenoise()
	}

}
b = new VehicleConstructor('bike', 2, 1, 'ring ring',5)
console.log(b.name + ' ' + b.wheels)

s = new VehicleConstructor('sedan', 4,1,'honk honk',5)
// console.log(s.name+' '+ s.wheels)
s.check_miles()
s.move()
bus = new VehicleConstructor('bus', 4,1,'none',5)

console.log(bus.name+' '+bus.wheels)
bus.add_people = function(people){
	this.passengers += people
	console.log(this.passengers)
	return this.passengers
}
bus.add_people(4)
s.check_miles();


