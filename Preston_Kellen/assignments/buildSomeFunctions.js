function runningLogger(){
    console.log('I am running!');
}
runningLogger()


function multiplyByTen(num){
    return num * 10
}
multiplyByTen(5)

console.log(multiplyByTen(5))

function stringReturnOne(){
    return "bootcamp"
}
console.log(stringReturnOne())

function stringReturnTwo(){
    return "swiftyfive"
}
console.log(stringReturnTwo())

function caller(arg){
    if (typeof(arg)=='function'){
        arg()
    }
}
caller(runningLogger)

function myDoubleConsoleLog(a,b){
    if (typeof(a)=='function'){
        console.log(a())
    }
    if (typeof(b)=='function'){
        console.log(b())
    }
}
myDoubleConsoleLog(stringReturnOne, stringReturnTwo)

function caller2(arg){
    console.log('starting')
    if(typeof(arg)=='function'){
        setTimeout(arg, 2000, stringReturnTwo, stringReturnOne)
    }
    console.log('ending?')
    return 'interesting'
}
caller2(myDoubleConsoleLog)
