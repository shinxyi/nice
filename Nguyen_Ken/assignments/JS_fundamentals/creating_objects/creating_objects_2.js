//creating objects 2
function VehicleConstructor(name, wheelCount, passengerCount, speed){
  var self = this,
      wheelCount = wheelCount,
      distanceTravelled = 0

  function updateDistanceTravelled(){
    return distanceTravelled += self.speed
  }


  this.passengerCount = passengerCount
  this.speed = speed


  this.makeNoise = function(){
    console.log('VRMMMMMMM')
  }
  this.move = function(){
    updateDistanceTravelled() //private -- don't need "this"
    this.makeNoise()          //public -- object/instance method -- needs "this"
  }
  this.checkMiles = function(){
    console.log(distanceTravelled)
  }
}

////////////////////////////////
var Bike = new VehicleConstructor("CBR", 2, 2, 50)
Bike.makeNoise = function(){
  console.log('ring ring!')
}
////////////////////////////////
var Sedan = new VehicleConstructor("Lamborghini", 4, 2, 100)
Sedan.makeNoise = function(){
  console.log('Honk Honk!')
}
////////////////////////////////
var Bus = new VehicleConstructor("GreyHound", 6, 5, 40)
Bus.pickUpPassengers = function(passengers){
  return Bus.passengerCount += passengers
}

console.log(Bus.pickUpPassengers(20))
Bus.checkMiles()
Bus.move()
Bus.checkMiles()
Bus.move()
Bus.checkMiles()
////////////////////////////////
