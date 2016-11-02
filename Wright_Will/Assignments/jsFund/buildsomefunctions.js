function runningLogger(){
    console.log('I am running!')
}

function multiplyByTen(n){
    return n * 10
}
multiplyByTen(5)

function stringReturnOne(){
    return "foo"
}
function stringReturnOne(){
    return "bar"
}
function caller(fn){
    if (typeof(fn) == 'function'){
        fn()
    }
}

function myDoubleConsoleLog(a,b){
    if (typeof(a) == 'function'){
        console.log(a())
    }
    if (typeof(b) == 'function'){
        console.log(b())
    }
}
function caller2(a){
    console.log('starting')
    setTimeout(caller,2000,a)
    console.log('ending')
}
caller2(runningLogger)
