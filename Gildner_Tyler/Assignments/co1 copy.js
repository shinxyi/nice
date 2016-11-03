function VehicleConstructor(name, wheels, passengers){
    var vehicle = {}
        vehicle.name = name
        vehicle.wheels = wheels
        vehicle.passengers = passengers
        vehicle.makeNoise = function(noise){
            var noise = noise
            console.log(noise)
        }
    return vehicle
}
var bike = VehicleConstructor('bike', 2, 1)
console.log(bike)
bike.makeNoise('ring ring!')

var sedan = VehicleConstructor('sedan', 4, 5)
console.log(sedan)
sedan.makeNoise('honk honk!')

var bus = VehicleConstructor('bus', 6, 8)
bus.pickup = function(pluspass){
  bus.passengers += pluspass;
}

console.log(bus.passengers)
bus.pickup(3)
console.log(bus.passengers)
