'use strict'

// JavaScript source code
function myLib()
{
    var getEm =
     {
         filter: function (arr, callback) {
             var newarr = [];
             for (var i = 0; i < arr.length; i++) {
                 if (callback(arr[i])) {
                     newarr.push(arr[i])
                 }
             }
             return newarr;
         }

        //battingAvg: function (hits, atBats, callback)
        //{
            
        //    if (hits/atBats > .300) 
        //    {
        //        return console.log('Good Job, you made the team: BA = '+ ' ' + atBats/hits);
        //    }

        //}
    }
    return getEm;
}

var odd = myLib().filter([1, 2, 3, 4, 5, 6, 7, 8], function (num) { return num % 2 == 1; });
//var myBattingAvg = myLib().battingAvg(4, 12, function (num, num2) {return num > 1;}); 
console.log(odd);
console.log(myBattingAvg);


