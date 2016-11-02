//function builder

//1
function runningLogger(){
  console.log('I am running!');
}
runningLogger();

//2
function multiplyByTen(num){
  return num*10;
}

console.log(multiplyByTen(5));

//3
function stringReturnOne(){
  return "Sasuke!!!";
}

function stringReturnTwo(){
  return "Naruto!!!";
}

//4
function caller(input){
  if (typeof(input) == 'function'){
    input();
  }
  return;
}


//5
function myDoubleConsoleLog(args){
  let [param1, param2] = args;
  if (typeof(param1) == 'function'){
    console.log(param1());
  }
  if (typeof(param2) == 'function'){
    console.log(param2());
  }
  return;
}

//6
function caller2(param, args){
  console.log("Starting...");
  if (typeof(param) == 'function'){
    setTimeout(param.bind(null, args), 2000);
  }
  console.log("ending?");
  return "interesting";
}

caller2(myDoubleConsoleLog, [stringReturnOne, stringReturnTwo]);
