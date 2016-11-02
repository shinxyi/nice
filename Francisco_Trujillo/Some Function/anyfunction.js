function runningLogger(){
    console.log("I am running");
}

runningLogger();

function multiplyByTen(num){
    console.log(num*10);
}

multiplyByTen(20);

function stringReturnOne(){
    
    return 'One';
}

function stringReturnTwo(){
    return 'two';
    
}

console.log(stringReturnOne(), stringReturnTwo());

function caller(para){
    if(typeof(para) == 'function' ){
        para;
    }
        
}

caller(runningLogger());

function myDoubleConsoleLog(par1, par2){
    if (typeof(par1) == 'function'){
        console.log(par1);
    }
    else if (typeof(par2) == 'function'){
        console.log(par2);
    }
}
myDoubleConsoleLog(stringReturnOne(), stringReturnTwo());

function delay(){
    console.log('ending');
}

function caller2(para){
    console.log('Starting');
    if (typeof(para) == 'function'){
    setTimeout(delay,2000);
    }
    return 'Interesting';
        

}
console.log(caller2(caller));

