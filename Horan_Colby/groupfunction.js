function runningLogger(){
	console.log('I am running!')
}


function multiplyByTen(x){
	console.log(x * 10)
}
multiplyByTen(5);

function stringReturnOne(){
	console.log('hello')
}

function stringReturnTwo(){
	console.log('goodbye')
}
stringReturnOne();
stringReturnTwo();

function caller(x){
	if (x === typeof function(){}){
		x();
	}
}
caller(stringReturnTwo());

function myDoubleConsoleLog(x, y){
	if (x && y === typeof function(){}){
		console.log(x);
		console.log(y);
	} 
}

myDoubleConsoleLog(stringReturnOne(), stringReturnTwo());

function myDoubleConsoleLog(x, y){
	if (x && y === typeof function(){}){
		console.log(x);
		console.log(y);
	} 
}

function caller2(x){
	console.log('starting')
	if (typeof(x) == 'function'){
		setTimeout(x, 2000)
	}
	console.log('ending?')
	return 'interesting'

}

caller2(stringReturnOne);

