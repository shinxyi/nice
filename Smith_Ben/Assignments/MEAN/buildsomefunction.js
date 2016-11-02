function runningLogger(){
	console.log("I am running");
}
runningLogger()


function multiTen(num){
	console.log(num*10);
} 
multiTen(5);


function stringReturnOne(){
	return 'Ben';
}

function stringReturnTwo(){
	return 'Smith';
}
console.log(stringReturnOne(), stringReturnTwo());


function caller(paramater){
	if(typeof(parameter)=='function'){
		return parameter();
	}
}
caller(runningLogger());



function myDoubleConsleLog(param1, param2){
	if(typeof(param1)=="function"){
		console.log(param1());
	}
	else if(typeof(param2)=="function"){
		console.log(param2());
	}
}

function caller2(){
	console.log("starting");
	setTimeout(function(){ console.log('ending'); }, 2000);
	}

function delay(){
		console.log('ending');
	}

function caller2(param){
	console.log('starting');
		if(typeof param == 'function'){
			setTimeout(delay, 2000);
	}
	return 'interesting'
}
caller2(myDoubleConsleLog);










