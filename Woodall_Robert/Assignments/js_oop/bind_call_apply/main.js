/* bind example */
var customObj = {
	name: 'California, Eureka',
	onClick: function(myParam) {
		console.log('item clicked!');
		console.log(this.name);
		console.log(myParam, '<- was passed through bind()');
	}
};

$(document).ready(function () {
	$('button').click(customObj.onClick.bind(customObj, 'Bind this argument!'));
});

/* call/apply example */
function Ninja(name, age){
  this.name = name;
  this.age = age;
  // there could be lots of other stuff here!
}
function BlackBelt(name,age){
  //Commas!
  Ninja.call(this,name,age);
  this.belt = 'black';
}
function YellowBelt(name,age){
  //ARRAY
  Ninja.apply(this,[name,age]);
  this.belt = 'yellow';
}
var yB = new YellowBelt('mike', 40);
var bB = new BlackBelt('charlie', 29);
console.log(bB.name);
console.log(yB.name);