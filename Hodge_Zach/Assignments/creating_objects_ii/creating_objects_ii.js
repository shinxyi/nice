function VehicleConstructor(name, wheels, passengers, speed, noise) {
    var distance_travelled = 0;

    function updateDistanceTravelled() {
        distance_travelled += speed;
    }

    var vehicle = {};

    this._name = name;
    this.wheels = wheels;
    this.passengers = passengers;
    this.speed = speed;

    this.makeNoise = function(){
        console.log(noise);
    }

    this.move = function(){
        updateDistanceTravelled();
        this.makeNoise();
    }

    this.checkMiles = function() {
        console.log(distance_travelled);
    }

    return this;
};

var Bike = VehicleConstructor("Tallgeese", 2, 1, 5,"ring ring!");
Bike.makeNoise();

var Sedan = VehicleConstructor("Shadowmere", 4, 4, 25,"honk honk!");
Sedan.makeNoise();

var Bus = VehicleConstructor("Doubledecker", 8, 24);
Bus.pickup = function(passenger) {
    Bus.passengers += passenger;
}
