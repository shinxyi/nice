function running(){

    console.log('I am running');
}

function multiten(num){
    console.log (num*10);
    return (num*10);
}

multiten(5);

function stringReturnOne(){
    return 'abc123';
}

function stringReturnTwo(){
    return 'xyz123';

}

function caller(pram){
    if(typeof(pram)=='function'){
        return pram();
    }
}

function myDoubleConsoleLog(pram1, pram2, timer){
    console.log(timer)
    if((typeof(pram1)=='function') && (typeof(pram2)=='function')){
        return pram1(),pram2();
        // console.log ('hello');

    }
}

function caller2(){
    console.log('starting');
    setTimeout(function(){ console.log('ending'); }, 2000);
}

console.log(stringReturnOne());
console.log(stringReturnTwo());
console.log(typeof(stringReturnTwo));
console.log(caller(stringReturnOne));
console.log(myDoubleConsoleLog(stringReturnOne,stringReturnTwo, caller2()));
