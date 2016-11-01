function vehicleConstructor(){
    return vehic ={
        makeNoise: function(){
            console.log("vroom")
        }
    }
}

bike = vehicleConstructor()
bike.makeNoise = function(){
    console.log("ring ring!")
}

sedan = vehicleConstructor()
sedan.makeNoise = function(){
    console.log("honk honk!")
}

bus = vehicleConstructor()
bus.passengerCount = 0
bus.pickUpPassengers = function(n){
    this.passengerCount += n
}
