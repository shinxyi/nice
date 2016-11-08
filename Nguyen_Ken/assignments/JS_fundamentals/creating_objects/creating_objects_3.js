//creating objects 3
function VehicleConstructor(name, wheelCount, passengerCount, speed){
  //private
  var self = this
  function generateVIN(){
    for (var i=1; i<18; i++){
      self.VIN += (Math.floor(Math.random()*2) == 1 ? Math.floor(Math.random()*10) : String.fromCharCode(((Math.floor(Math.random()*2))==0?65:97)+(Math.floor(Math.random()*26))))
    }
    console.log(self.VIN)
  }

  this.VIN = ''
  this.name = name
  this.wheelCount = wheelCount
  this.passengerCount = passengerCount
  this.speed = speed
  this.distanceTravelled = 0

  generateVIN()
}

VehicleConstructor.prototype.makeNoise = function(){
  console.log('VRMMMMMMM')
  return this
}

VehicleConstructor.prototype.updateDistanceTravelled = function(){
  this.distanceTravelled += this.speed
  return this
}

VehicleConstructor.prototype.move = function(){
  this.updateDistanceTravelled()
  this.makeNoise()
  return this
}

VehicleConstructor.prototype.checkMiles = function(){
  console.log(this.distanceTravelled)
  return this
}

////////////////////////////////
var Bike = new VehicleConstructor("R1", 2, 2, 50)
Bike.makeNoise = function(){
  console.log('ring ring')
}

Bike.move().move().move().checkMiles()
////////////////////////////////
var Sedan = new VehicleConstructor("Honda", 4, 4, 60)
Sedan.makeNoise = function(){
  console.log('Honk Honk!')
}
Sedan.makeNoise()
////////////////////////////////
var Bus = new VehicleConstructor("Bus-o", 6, 7, 40)
Bus.pickUpPassengers = function(passengers){
  this.passengerCount += passengers
}
Bus.pickUpPassengers(8)
console.log(Bus.passengerCount)
////////////////////////////////
