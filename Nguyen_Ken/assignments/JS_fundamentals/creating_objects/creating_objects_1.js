//creating objects 1

function VehicleConstructor(name, wheelCount, passengerCount){
  var name = name,
      wheelCount = wheelCount,
      vehicle = {}

  // properties
  vehicle.passengerCount = passengerCount

  // methods
  vehicle.getName = function(){
    console.log(name)
  }

  vehicle.getWheelCount = function(){
    console.log(wheelCount)
  }

  vehicle.getPassengerCount = function(){
    console.log(vehicle.passengerCount)
  }

  vehicle.makeNoise = function(){
    console.log('VRMMMMMMM')
  }
  return vehicle
}

////////////////////////////////
var Bike = VehicleConstructor('Yamaha', 2, 1)
Bike.getName()
Bike.getWheelCount()
Bike.getPassengerCount()
Bike.makeNoise()
Bike.makeNoise = function(){
  console.log('ring ring')
}
Bike.makeNoise()
////////////////////////////////
var Sedan = VehicleConstructor('Skyline', 4, 4)
Sedan.makeNoise = function(){
  console.log("Honk Honk!")
}

Sedan.makeNoise()
////////////////////////////////
var Bus = VehicleConstructor('Dart', 6, 4)
Bus.pickUpPassengers = function(passengerCount){
  Bus.passengerCount += passengerCount
  return Bus.getPassengerCount()
}
Bus.pickUpPassengers(5)
