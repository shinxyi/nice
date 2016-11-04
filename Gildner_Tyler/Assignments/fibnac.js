function fib() {
    var a = 0, b = 1 //
 function nacci() {
   var c = a
   a = b
   b = b + c
   console.log(b)
 }
 return nacci
}
var fibCounter = fib()
fibCounter() // should console.log "2"
fibCounter() // should console.log "3"
fibCounter() // should console.log "5"
fibCounter() // should console.log "8"
fibCounter() // should console.log "1"
fibCounter() // should console.log "2"
fibCounter() // should console.log "3"
fibCounter() // should console.log "5"
fibCounter() // should console.log "8"
