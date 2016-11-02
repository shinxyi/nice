
    "use strict";
    // Go through each value in the array x, where x = [3,5,‘Dojo’, ‘rocks’, ‘Michael’, ‘Sensei’]. Log each value.
    var x = [3,5,'Dojo', 'rocks', 'Michael', 'Sensei'];
    console.log( 'x values', x );

    // Add a new value (100) in the array x using a push method.
    var y = 100;
    x.push(y);
    console.log('x values', x);

    // Add a new array ["hello", "world", "JavaScript is Fun"] to variable x. Log x in the console and analyze how x looks now.
    var newArr = ["hello", "world", "JavaScript is fun"];
    x.push(newArr);
    console.log('x values', x);

    // Create a simple for loop that sums all the numbers between 1 to 500. Have console log the final sum.
      var sum = 0;
      for (var i = 1; i <=500; i++){
        sum = sum + i;
      }
      console.log(sum);


    // Write a loop that will go through the array [1, 5, 90, 25, -3, 0], find the minimum value, and then print it
    var arr = [1,5,90,25,-3,0];
    var min = 0;
    for (var i = 0; i < arr.length; i++){
      if (arr[i] < min){
        min = arr[i];
        console.log(min);
      }
    }

    // Write a loop that will go through the array [1, 5, 90, 25, -3, 0], find the average of all of the values, and then print it
    var arr2 = [1,5,90,25,-3,0];
    var sum = 0;
    var count = 0;
    var avg = 0;
    for (var i = 0; i < arr2.length; i++){
      sum = sum + arr2[i]
      count ++;
    }
    avg = sum / count;
    console.log(avg);

    // Write a for-in loop that will navigate through the object below (or write your own object):

    var new_ninja = {
      name: 'Philip',
      profession: 'coder',
      favorite_language: 'English',
      dojo: 'Dallas'
    }
    console.log('new_ninja values', new_ninja);
