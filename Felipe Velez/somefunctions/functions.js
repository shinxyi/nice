      function runninglogger(){
        console.log('I am running');
      }
      function multiplyByTen(x){
        return x * 10;
      }
     console.log(multiplyByTen(5));

      function stringreturnOne(){
        return "my string"
      }
      function stringreturnTwo(){
        return "my string number 2"
      }
      function caller(parameter){
        if(typeof(parameter)=='function'){
          parameter();
        }
      }
      function myDoubleConsoleLog(par1, par2){
        if(typeof(par1) =='function' && typeof(par2) == 'function'){
          console.log(par1());
          console.log(par2());
        }
      }
      function caller2(myDoubleC){
        console.log('startin')
        
        setTimeout(myDoubleC, 2000);
        console.log(typeof(myDoubleC) == 'function')
        if(typeof(myDoubleC) =='function'){
          console.log(myDoubleC(stringreturnOne, stringreturnTwo));
          console.log('ending');
          return 'intersting'
        }

      }
      console.log(caller2(myDoubleConsoleLog))

