function VehicleContructor(name,numofwheels,numofpassengers,speed){
  var distance_travelled = 0;
  var updateDistance = function(){distance_travelled += this.speed};

  this.name = name;
  this.wheels = numofwheels;
  this.passengers = numofpassengers;
  this.speed = speed;
  this.makeNoise = function(){};
  this.move = function(){updateDistance(); console.log(this.makeNoise());};
  this.checkMiles = function(){console.log(distance_travelled);};
};
//FIX ME NAN WHEN TRYING TO USE BIKE.checkMiles

var bike = new VehicleContructor('Bike',2,1,5);
bike.makeNoise = function(){console.log('ring ring');}
bike.move();
bike.checkMiles();

var sedan = new VehicleContructor('Sedan',4,5,25);
sedan.makeNoise = function(){console.log('honk honk!');}


var bus = new VehicleContructor('Bus',4,0,10);
bus.peeps = function(arg1){bus.passengers += arg1}
