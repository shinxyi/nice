// function VehicleConstructor(name, speed, a, b){
//   var distance_traveled = 0;
//   var updateDistanceTravelled = function (x){
//     distance_traveled += x;
//   }
//   this.name = name;
//   this.speed = speed;
//   this.capacity = a;
//   this.wheels = b;
//   this.makeNoise = function(){
//     console.log('vroom');
//   }
//   this.move = function(){
//     updateDistanceTravelled(this.speed);
//     this.makeNoise();
//   }
//   this.checkMiles = function(){
//     console.log(distance_traveled)
//   }
// }
//
// var bike = new VehicleConstructor('bike', 10, 1, 2)
// console.log(bike)
//
// bike.move()
// bike.checkMiles()

class Vehicle {
  constructor (name, speed, a, b){
    this.name = name;
    this.speed = speed;
    this.capacity = a;
    this.wheels = b;
    var distance_traveled = 0;
    var updateDistanceTravelled = function (x){
      distance_traveled += x;
    }
    this.makeNoise = function(){
      console.log('vroom');
    }
    this.move = function(){
      updateDistanceTravelled(this.speed);
      this.makeNoise();
    }
    this.checkMiles = function(){
      console.log(distance_traveled)
    }
  }
}

var bike = new Vehicle('bike', 10, 1, 2)
console.log(bike)



bike.move()
bike.checkMiles()
