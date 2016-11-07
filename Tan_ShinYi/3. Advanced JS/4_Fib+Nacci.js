function fib() {
  var prev=1;
  var prev2=1;
  var count=1;

  function nacci() {
    var sum=prev+prev2;
    if(count<3){
      count++;
      return console.log(1);
    }
    prev=prev2;
    prev2=sum;
    console.log(sum);
  }
  return nacci
}
var fibCounter = fib();
fibCounter() // should console.log "1"
fibCounter() // should console.log "1"
fibCounter() // should console.log "2"
fibCounter() // should console.log "3"
fibCounter() // should console.log "5"
fibCounter() // should console.log "8"
