function Vehicle(name, numWheels, numPass, speed){
	if (!(this instanceof Vehicle)){
    return new Vehicle(name, numWheels, numPass, speed);
  }
  // String used to generate vin number
  var chars = "0123456789ABCEDGHIJKLMNOPQRSTUVWXYZ";

	this.name = name;
	this.numWheels = numWheels;
	this.numPass = numPass;
	this.speed = speed;
	this.distanceTraveled = 0;

// Invoke createVin to generate random vin number
  this.vin = createVin();

  function createVin(){
    var vin = '';
    for (var i = 0; i < 17; i+=1 ){
      // Use Math.floor and Math.random to generate random index to access character from char string
      vin += chars[Math.floor(Math.random()*35)];
    }
    return vin;
  }
}

Vehicle.prototype.makeNoise = function(noise){
		var noise = "Vroom vroom!";
		console.log(noise);
		return this;
	};
Vehicle.prototype.updateDistanceTraveled = function(){
		this.distanceTraveled += this.speed;
		console.log(this.distanceTraveled);
		return this;
	};

Vehicle.prototype.move = function(){
	this.makeNoise();
	this.updateDistanceTraveled();
	return this;
	};

Vehicle.prototype.checkMiles = function(){
	console.log(this.distanceTraveled);
	return this;
	}
var car = new Vehicle('car', 4, 4, 80);