function Vehicle(name, numberOfWheels, speed, numberOfPassengers=0){
    this.name = name
    this.speed = speed
    this.numberOfWheels = numberOfWheels
    this.numberOfPassengers = numberOfPassengers
    var distance_traveled = 0
    this.check_miles = function(){
        console.log(distance_traveled)
    }
    this.updateDistanceTraveled = function(){
        distance_traveled += speed
        return this
    }
}

Vehicle.prototype = {
    move: function(){
        this.updateDistanceTraveled()
        this.makeNoise()
        return this
    },
    makeNoise: function(){
        console.log("vroom")
        return this
    }
}



bike = new Vehicle("bike",2,2)
bike.makeNoise = function(){
    console.log("ring ring!")
}

sedan = new Vehicle("sedan", 4,10)
sedan.makeNoise = function(){
    console.log("honk honk!")
}

bus = new Vehicle("bus", 6,5)
bus.pickUpPassengers = function(n){
    this.passengerCount += n
}


bike.move().move()
bike.check_miles()
