function Vehicle(name, wheels, passengers, speed){
    this.name = name
    this.vin = Math.floor(Math.random() * (0, 99999) + 10000)
    this.wheels = wheels
    this.passengers = passengers
    this.speed = speed
    this.distance_traveled = 0
}
Vehicle.prototype.updateDistanceTraveled = function(){
    this.distance_traveled += this.speed
    return this
}
Vehicle.prototype.makeNoise = function(noise){
    var noise = noise
    console.log(noise)
}
Vehicle.prototype.move = function(noise){
    console.log(noise)
    this.updateDistanceTraveled()
}
Vehicle.prototype.checkMiles = function(){
    console.log(this.distance_traveled)

}

var bike = new Vehicle('bike', 2, 1, 20)
console.log(bike)
bike.makeNoise('ring ring!')
bike.speed
bike.move('choo choo')
bike.move('choo choo')
bike.checkMiles()

// var sedan = new Vehicle('sedan', 4, 5, 80)
// console.log(sedan)
// sedan.makeNoise('honk honk!')
//
// var bus = new Vehicle('bus', 6, 8, 60)
// bus.pickup = function(pluspass){
//   bus.passengers += pluspass;
// }
// bus.speed
// bus.speed
// console.log(bus.move()
// bus.checkMiles()
