function runningLogger(){
	console.log('I am running!');
}

function multiplyBy10(param) {
	return param * 10;
}

function stringReturnOne() {
	return 'String one!';
}

function stringReturnTwo() {
	return 'String two!';
}

function caller(param) {
	if (typeof(param) === 'function') {
		return param();
	}
}

function myDoubleConsoleLog(a, b) {
	if (typeof(a) === 'function') {
		console.log(a());
	}

	if (typeof(b) === 'function') {
		console.log(b());
	}
}

function caller2(param) {
	console.log('starting');

	setTimeout(function() {
		if (typeof(param) === 'function') {
			param(stringReturnOne, stringReturnTwo); //passed in parameter for myDoubleConsoleLog arguement
		}
	}, 2000);

	console.log('ending...');
	return 'interesting!';
}

console.log(multiplyBy10(5));
console.log(caller2(myDoubleConsoleLog)); //We had to take the parameters and pass them in up there because
                                          // otherwise, the function myDoubleConsoleLog would be called before caller2 can
                                          // even execute
