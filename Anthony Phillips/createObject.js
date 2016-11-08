// JavaScript source code
function VehicleConstructor(name, numOfWheels, numOfPassengers, speed) {
    this.name = name;
    this.numOfWheels = numOfWheels;
    this.numOfPassengers = numOfPassengers;
    this.speed = speed;
    var distance_traveled = 0;
    var update_distance_traveled = function () { distance_traveled += this.speed }
    this.makeNoise = function () { console.log("Cling-cling") };

    this.move = function () { update_distance_traveled(); makeNoise(); };
    this.checkMiles = function () { console.log(this.distance_traveled);}
    
    return this
}
var i = new VehicleConstructor('Bike', 2, 1);
i.makeNoise = function () { console.log("Ring-ring") };
console.log(i.makeNoise())

var s = new VehicleConstructor('Sedan', 4, 1);
i.makeNoise = function () { console.log("Honk-honk") };
console.log(s.makeNoise())

var b = new VehicleConstructor('Bus', 6, 1);
b.addPassengers = function (arg) { this.numOfPassengers += arg }
b.addPassengers(5)
console.log(b.numOfPassengers)

