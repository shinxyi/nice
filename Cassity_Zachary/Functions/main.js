function runningLogger(){
  console.log('I am running!');
}


function multiplyByTen(arg1){
  console.log(arg1 * 10)
}


function stringReturnOne(){
  console.log('String One!')
}
function stringReturnTwo(){
  console.log('String Two!')
}

function caller(arg1){
  if (typeof(arg1) === 'function') {
    console.log(arg1)
  }
}


function myDoubleConsoleLog(arg1,arg2){
  if (typeof(arg1) ==='function' && typeof(arg2) === 'function'){
    console.log(arg1);
    console.log(arg2);
  }
}
// IM STILL FIGURING THIS OUT! I WANTED TO TRY A DIFFERENT WAY TO DO IT OUTSIDE OF GROUP WORK
function caller2(arg1){
  console.log('starting');
  if (console.log(typeof(arg1) === 'function')) {
    setTimeOut(arg1,2000);
    console.log(arg1);
  }
  console.log('interesting')
}
caller2(myDoubleConsoleLog(stringReturnOne,stringReturnTwo))
