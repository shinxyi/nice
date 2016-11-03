function fib(){
  var a = 0
  var b = 1
  function nacci(){
    var c = a;
    a = b;
    b += c;

    console.log(b);
  }
  return nacci
}
var fibCounter = fib();
fibCounter();
fibCounter();
fibCounter();
fibCounter();
fibCounter();
fibCounter();
