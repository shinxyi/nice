function fib(){
    var start = 0;
    var next = 0;

    function nacci(){
        if ((start == 0) && (next == 0)){
            next = 1;
            sum = 1;
        }//end if
        else{
            var sum = start + next;
            start = next;
            next = sum;
        }//end else
        console.log(sum);
    }
    return nacci;
};

var fibCounter = fib();
fibCounter() // should console.log "1"
fibCounter() // should console.log "1"
fibCounter() // should console.log "2"
fibCounter() // should console.log "3"
fibCounter() // should console.log "5"
fibCounter() // should console.log "8"
