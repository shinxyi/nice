function sum(x, y){
    var sum = x;
    for (var i=x; i<=y; i++){
        sum += i;
    }
    console.log(sum);
};

function minArray(arr){
    var min = arr[0];
    for (var i=1; i<arr.length; i++){
        if (min > arr[i]) {
            min = arr[i];
        }
    }
    return min;
};

function avgArray(arr){
    var sum = arr[0];
    var avg = 0.0;

    for (var i=1; i<arr.length; i++){
        sum += arr[i];
    }

    avg = sum / arr.length;

    return avg;
};

var person = {
    name: "Roq",
    distance_traveled: 0,
    say_name: function() { console.log(person['name']); },
    say_something: function(str) {console.log(person['name'] + str); },
    walk: function() {
        alert(person['name'] + "is walking");
        person['distance_traveled'] += 3;
    },
    run: function() {
        alert(person['name'] + "is running");
        person['distance_traveled'] += 10;
    },
    crawl: function () {
        alert(person['name'] + "is crawling");
        person['distance_traveled'] += 1;
    }
};
