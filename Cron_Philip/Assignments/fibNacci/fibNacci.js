function fib() {
  this.num = 1;
  this.end = 8;
  this.sum = 0;
  this.prev = 0;
  this.sum2 = 0;
  this.temp = 0;
  function nacci() {
    while (this.num < this.end)
    {
        if (this.num === 1) {
            this.sum = this.num;
            console.log(this.sum);
        }
        else {
            this.sum2 = this.sum + this.prev;
            console.log(this.sum2);
            this.temp = this.sum;
            this.prev = this.temp;
            this.sum = this.sum2;
        }
        this.num++;
       }
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
