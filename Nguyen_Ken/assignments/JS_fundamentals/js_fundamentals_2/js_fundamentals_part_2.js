//js fundmentals part 2

//Create a simple for loop that sums all the integers between x and y (inclusive). Have it console log the final sum.
var fun_object = {
    final_sum: function(x, y) {
                  var sum = 0
                  for (var i=x; i<y+1; i++){
                    sum += i
                  }
                  return sum
                },

    find_min: function(arr) {
                  var min = arr[0]
                  for (var i=0; i<arr.length; i++){
                    if (arr[i]<min){
                      min = arr[i]
                    }
                  }
                  return min
                },

    find_avg: function(arr) {
                  var sum = 0
                  for (var i=0; i<arr.length; i++){
                    sum += arr[i]
                  }
                  return (sum/arr.length)
                }
}

var person = {
  name : 'Ken',
  distance_traveled: 0,
  say_name: function(){
              alert(person.name)
            },
  say_something: function(str){
                    alert(person.name+" says "+str)
                  },
  walk: function(){
          alert(person.name+" is walking")
          person.distance_traveled += 3
          return person.distance_traveled
        },
  run: function(){
          alert(person.name+" is running")
          person.distance_traveled += 10
          return person.distance_traveled
        },
  crawl: function(){
          alert(person.name+" is crawling")
          person.distance_traveled += 1
          return person.distance_traveled
        }
}
