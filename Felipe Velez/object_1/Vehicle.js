function VehicleConstructor(name, wheels, passengers){
    var vehicle = {};
    vehicle.name =name;
    vehicle.wheels = wheels;
    vehicle.passenger = passengers;
    vehicle.makenoise = function(noise){console.log(vehicle.name, noise)};
    
    return vehicle;
}

var bike = VehicleConstructor('bike', 2, 1);
bike.makenoise("Ring Ring");

var sedan = VehicleConstructor('sedan', 4, 4);
sedan.makenoise('Honk, Honk');

var bus = VehicleConstructor('bus', 6, 40);
bus.passengers = function(xp){
    bus.passenger += xp;
    return bus;
}
bus.passengers(5);
console.log(bus.passenger);
