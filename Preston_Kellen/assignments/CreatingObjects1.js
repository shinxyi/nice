function VehicleConstructor(a, b){
  var vehicle = {};
  vehicle.capacity = a;
  vehicle.wheels = b;
  vehicle.makeNoise = function(){
    console.log('vroom');
  }
  return vehicle;
}
var bike = VehicleConstructor(1, 2);
bike.makeNoise = function(){
  console.log('ring ring');
}
console.log(bike);
bike.makeNoise();

var sedan = VehicleConstructor(5, 4);
sedan.makeNoise = function(){
  console.log('honk honk');
}
console.log(sedan);
sedan.makeNoise();

var bus = VehicleConstructor(29, 4);
bus.carrySize = function(num){
  bus.capacity += num;
  console.log(bus.capacity);
}
bus.carrySize(4);
