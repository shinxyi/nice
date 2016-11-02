function VehicleConstructor(name, wheels, passengers) {
    var vehicle = {};

    vehicle._name = name;
    vehicle.wheels = wheels;
    vehicle.passengers = passengers;

    vehicle.makeNoise = function(noise){
        console.log(noise);
    }
};

var Bike = VehicleConstructor("Tallgeese", 2, 1);
Bike.makeNoise("ring ring!");

var Sedan = VehicleConstructor("Shadowmere", 4, 4);
Sedan.makeNoise("honk honk!");

var Bus = VehicleConstructor("Doubledecker", 8, 24);
Bus.pickup = function(passenger) {
    Bus.passengers += passenger;
}
