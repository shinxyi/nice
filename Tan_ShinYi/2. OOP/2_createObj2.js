/*
Assignment: Modify your VehicleConstructor (from earlier) to use this & new
(and follow the JS conventions talked about in the previous chapters).

- Each vehicle should have a makeNoise method
- Using the constructor, create a Bike
-  Redefine the Bike’s makeNoise method to print “ring ring!”
-  Create a Sedan
-  Redefine the Sedan’s makeNoise method to print “Honk Honk!”
-  Using the constructor, create a Bus
-  Add a method to Bus that takes in the number of passengers to pick up
-  and adds them to the passenger count​
*/


function VehicleConstructor(name, wheels, passengers, speed) {

  var self = this;
  var distance_travelled = 0;
  var updateDistanceTravelled = function(){
    distance_travelled += self.speed; //note to self: take notice of where this & self are used!
  }

  this.name = name;
  self.wheels = wheels;
  this.passengers = passengers;
  this.speed = speed;

  this.makeNoise = function(){
    console.log('VROOOMMM!');
  }

  this.move = function(){
    updateDistanceTravelled();
    this.makeNoise();
  }

  this.checkMiles = function(){
    console.log(distance_travelled);
  }

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
