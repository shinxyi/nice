function VehicleConstructor(name, wheels, passengers, speed){
        var distance_traveled = 0
        var updateDistanceTraveled = function(){
            distance_traveled += speed
        }
        this.name = name
        this.wheels = wheels
        this.passengers = passengers
        this.speed = speed
        this.makeNoise = function(noise){
            var noise = noise
            console.log(noise)
        }
        this.move = function(){
            updateDistanceTraveled()
        }
        this.checkMiles = function(){
            console.log(distance_traveled)

        }
}
var bike = new VehicleConstructor('bike', 2, 1, 20)
console.log(bike)
bike.makeNoise('ring ring!')

var sedan = new VehicleConstructor('sedan', 4, 5, 80)
console.log(sedan)
sedan.makeNoise('honk honk!')

var bus = new VehicleConstructor('bus', 6, 8, 60)
bus.pickup = function(pluspass){
  bus.passengers += pluspass;
}
bus.checkMiles()
bus.move()
