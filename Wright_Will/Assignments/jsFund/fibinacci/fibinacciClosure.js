function fib() {
  n = 1, prev = 0;
  return () => {
    console.log(n)
    [n,prev] = [n+prev,n]
  }
}
var fibCounter = fib();
fibCounter() // should console.log "1"
fibCounter() // should console.log "1"
fibCounter() // should console.log "2"
fibCounter() // should console.log "3"
fibCounter() // should console.log "5"
fibCounter() // should console.log "8"
