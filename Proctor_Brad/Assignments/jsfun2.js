function sum(x,y){
    var sum = 0;
    for(var i = x; i <= y; i++){
        sum += i;
    }
    return sum;
}


var sum2 = function(a,b){
    var sum = 0;
    for(var i = a; i <= b; i++){
        sum += i;
    }
    return sum;
}


function minimum(arr){
    min = arr[0];
    for(var i = 1; i < arr.length; i++){
        if(arr[i] < min){
            min = arr[i];
        }
    }
    return min;
}


var minimum2 = function(arr){
    min = arr[0];
    for(var i = 1; i < arr.length; i++){
        if(arr[i] < min){
            min = arr[i];
        }
    }
    return min;
}


function avg(arr){
    sum = 0;
    for(var i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    return sum/arr.length;
}


var avg2 = function(arr){
    sum = 0;
    for(var i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    return sum/arr.length;
}


var obj = {
    sum2Func: function(a,b){
        var sum = 0;
        for(var i = a; i <= b; i++){
            sum += i;
        }
        return sum;
    },
    minimum2Func: function(arr){
        min = arr[0];
        for(var i = 1; i < arr.length; i++){
            if(arr[i] < min){
                min = arr[i];
            }
        }
        return min;
    },
    avg2Func: function(arr){
        sum = 0;
        for(var i = 0; i < arr.length; i++){
            sum += arr[i];
        }
        return sum/arr.length;
    }
}


var person = {
    name:'Brad',
    distance_traveled:0,
    say_name:function(){console.log(person.name);},
    say_something:function(words){console.log(person.name,'says',words);},
    walk:function(){console.log(person.name,'is walking');person.distance_traveled+=3;},
    run:function(){console.log(person.name,'is running');person.distance_traveled+=10;},
    crawl:function(){console.log(person.name,'is crawling');person.distance_traveled+=1;}
}
