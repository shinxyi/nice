/*
Assignment: Create a VehicleConstructor that takes in the name, number of wheels,
and the number of passengers. Then complete the following tasks:

- Each vehicle should have a makeNoise method
- Using the constructor, create a Bike
-  Redefine the Bike’s makeNoise method to print “ring ring!”
-  Create a Sedan
-  Redefine the Sedan’s makeNoise method to print “Honk Honk!”
-  Using the constructor, create a Bus
-  Add a method to Bus that takes in the number of passengers to pick up
-  and adds them to the passenger count​
*/


function VehicleConstructor(name, wheels, passengers) {
  var vehicle = {};

  vehicle.name = name;
  vehicle.wheels = wheels;
  vehicle.passengers = passengers;

  vehicle.makeNoise= function(){
    console.log('VROOOMMM!');
  }

  return vehicle;
}

var bike = VehicleConstructor("Bike", 2, 1);
bike.makeNoise = function(){
  console.log('ring ring!')
}

bike.makeNoise();

var sedan = VehicleConstructor("Sedan", 4, 4);
sedan.makeNoise= function(){
  console.log('Honk Honk!');
}

sedan.makeNoise();

var bus = VehicleConstructor("Bus", 4, 30);
bus.pickUpPassengers = function(num){
  bus.passengers += num;
}

bus.pickUpPassengers(15);
console.log(bus);
