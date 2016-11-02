
	
		function runningLogger(){
			console.log('I am running!');
		}
		runningLogger();

		function multiplyByTen(num){
			console.log(num*10);
		}
		multiplyByTen(5);

		function stringReturnOne(){
			return "Melissa";
		}
		console.log (stringReturnOne());

		function stringReturnTwo(){
			return "Guerrero";
		}
		console.log (stringReturnTwo());

		function caller(param){
			if (typeof param == 'function'){
				param();
			}
		}
		caller(runningLogger());

		function myDoubleConsoleLog(param1, param2){
			if (typeof param1 == 'function'){
				console.log(param1());
			}
			else if (typeof param2 == 'function'){
				console.log(param2());
			}
		
		}

		function delay(){
			console.log('ending?');
		}

		function caller2(param1){
			console.log('starting');
			console.log(typeof param1);
				if (typeof param1 == 'function'){
					setTimeout(delay, 2000);
					}
				return 'interesting';
			}
		caller2(myDoubleConsoleLog);