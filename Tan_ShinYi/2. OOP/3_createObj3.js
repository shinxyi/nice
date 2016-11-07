/*
Assignment: Modify your VehicleConstructor (from earlier) to use this & new
(and follow the JS conventions talked about in the previous chapters).

Now modify your code to use Prototype and the recommended way of OOP we showed
in the previous chapter.
*/


function VehicleConstructor(name, wheels, passengers, speed) {
  var vin = Math.floor(Math.random()*1000);
  this.distance_travelled=0;

  this.name = name;
  this.wheels = wheels;
  this.passengers = passengers;
  this.speed = speed;

  this.getVin = function(){
    console.log(vin);
  }
}

VehicleConstructor.prototype.updateDistanceTravelled = function(){
  this.distance_travelled += this.speed;
}

VehicleConstructor.prototype.makeNoise = function(){
  console.log('VROOOMM!');
}

VehicleConstructor.prototype.move = function(){
    this.updateDistanceTravelled();
    this.makeNoise();
}

VehicleConstructor.prototype.checkMiles = function(){
  console.log(this.distance_travelled);
}


var bike = new VehicleConstructor("Bike", 2, 1, 5);
bike.makeNoise = function(){
  console.log('ring ring!')
}

var sedan = new VehicleConstructor("Sedan", 4, 4, 40);
sedan.makeNoise= function(){
  console.log('Honk Honk!');
}

var bus = new VehicleConstructor("Bus", 4, 30, 35);
bus.pickUpPassengers = function(num){
  bus.passengers += num;
}

sedan.move();
sedan.move();
sedan.checkMiles();

bike.move();
bike.checkMiles();

bike.getVin();
sedan.getVin();
bus.getVin();
