function sum(a,b){
    out = 0
    for (let i = a; i < b; i++){
        out += i
    }
    return out
}

function min(arr){
    out = arr[0]
    for (var i = 0; i< arr.length; i++){
        if (arr[i] < out){
            out = arr[i]
        }
    }
    return out
}

function min2(arr){
    return arr.reduce((x,y) => y > x ? x : y  )
}

function min3(arr){
    return Math.min(...arr)
}

function avg(arr){
    sum = 0
    for (var i = 0; i < arr.length; i++){
        sum += arr[i]
    }
    return sum / arr.length
}

function avg2(arr){
    return arr.reduce((x,y) => x + y) / arr.length
}

// console.log(avg([0,2,7,44,-5,7,3]));

//do anonymous functionstuff...

obj= {
    min: min3,
    min2: arr => Math.min(...arr)

}

console.log(obj.min2([12,1,5,8]))


//... and now the object part...
var person = {
    name: "will",
    distance_traveled: 0,
    say_name: function(){
        console.log(this.name)
        return  this
    },
    say_something: function(something){
        console.log(something)
        return this
    },
    walk: function(){
        console.log(this.name + " is walking")
        this.distance_traveled += 3
        return this
    },
    run: function(){
        console.log(this.name + " is running")
        this.distance_traveled += 10
        return this
    },
    crawl: function(){
        console.log(this.name + " is crawling")
        this.distance_traveled += 1
        return this
    }

}


person.say_name().say_something("foo").walk().run().crawl()
console.log(person.distance_traveled);
