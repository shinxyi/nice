function runningLogger(){
	console.log('I am running!');
}
runningLogger();
function multiplyByTen(num){
	console.log(num*10);
}
multiplyByTen(5);


 function stringReturnOne(){
 	var output = 'Phillip';
 	return output;
 }
function stringReturnTwo(){
	var output = 'Ron';
	console.log(output);
	return output;
}
console.log(stringReturnOne() + ' ' + stringReturnTwo() );

function caller(func){
	if(typeof func === 'function'){
		console.log(func);
	}
}
caller(stringReturnTwo);





function myDoubleConsoleLog(p1, p2){
	if(typeof p1 === 'function' && typeof p2 === 'function'){
		console.log(p1()+ ' ' + p2());
	}
}
myDoubleConsoleLog(stringReturnOne,stringReturnTwo)



function ending(){
	console.log('ending')
}
function caller2(x){
	console.log('starting...');
	if(typeof x === 'function'){
		setTimeout(x,2000);
		ending();
		return 'interesting'
	}
}
caller2(stringReturnTwo);


















