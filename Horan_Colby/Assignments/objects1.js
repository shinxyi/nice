function VehicleConstructor(name, wheels, passengers){
	var vehicle = {
		name : name,
		wheels : wheels,
		passengers : passengers,
		makeNoise : 'Vroom Vroom'
	}
	return vehicle
}

var Bike = VehicleConstructor("Rudy", 2, 1)
Bike.makeNoise = 'Ring Ring'
console.log(Bike)

var Sedan = VehicleConstructor('Thunder Dan', 4, 4)
Sedan.makeNoise = 'Honk Honk!'
console.log(Sedan)

var Bus = VehicleConstructor('Bussy', 4, 30)
Bus.AddPass = function(pickup){
	passengers += pickup
}
console.log(Bus)

