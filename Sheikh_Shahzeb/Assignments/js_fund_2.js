function one(){
	var new_ninja = {
	name: 'Jessica',
	profession: 'coder',
	favorite_language: 'JavaScript', //like that's even a question!
	dojo: 'Dallas'
	}
	console.log(new_ninja)
}
one()


function two(){
	arr = [3,5,'Dojo','rocks', 'Michael', 'Sensei']
	arr.push(100)
	console.log(arr)

}
two()


function three(){
	var x= ["hello", "world", "JavaScript is Fun"]
	console.log(x)

}
three()


function sum(){
	for(var sum =1;sum<=5000;sum++){
		sum += sum
	}
	console.log(sum)
}
sum()


function min(){
	var arr=[1, 5, 90, 25, -3, 0]
	var z = arr[0]
	for(var i=0;i<=arr.length;i++){
		if(arr[i] < z){
			z = arr[i]
		}
	}
	console.log(z)	
}
min()



function avg(){
 	var arr=[1, 5, 90, 25, -3, 0]
 	var sum=0
 	for(var i =0;i<=arr.length;i++){
 		sum= sum+i
 	}
 	console.log(sum/arr.length)
}
avg()

function personConstructor(name){
	var person = {
		name :name,
		distance_traveled:0,
		walk: function(){alert(this.name+ 'is walking', distance_traveled+=3)},
		run: function(){alert(this.name+ 'is running', distance_traveled+=10)},
		crawl: function(){alert(this.name+ 'is crawling', distance_traveled+=1)},
		say_something : function(say) {this.name +' '+ say}
	} 
	return person
}
	i = new personConstructor('Shaz -')
	i.say_something('I am cool')






