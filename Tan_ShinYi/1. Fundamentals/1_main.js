    //Go through each value in the array x, where x = [3,5,‘Dojo’, ‘rocks’, ‘Michael’, ‘Sensei’]. Log each value.

    var x = [3 , 5, "Dojo" , "rocks" , "Michael" , "Sensei"] ;
    for (var i=0; i<x.length; i++){
      console.log(x[i]);
    }

    //Add a new value (100) in the array x using a push method.
    x.push(100);

    //Add a new array ["hello", "world", "JavaScript is Fun"] to variable x.

    x.push(["hello", "world", "JavaScript is Fun"]);

    console.log(x);

    //Create a simple for loop that sums all the numbers between 1 to 500. Have console log the final sum.
    var sum=0;
    for (var i=1; i<501; i++){
      sum+=i;
    }
    console.log(sum);

    //Write a loop that will go through the array [1, 5, 90, 25, -3, 0], find the minimum value, and then print it

    var y = [1, 5, 90, 25, -3, 0];
    var min= 0;
    for(var i=1; i<y.length; i++){
      if(y[i]<y[min]){
        min=i;
      }
    }

    console.log(y[min]);

    // Write a loop that will go through the array [1, 5, 90, 25, -3, 0], find the average of all of the values, and then print it
    sum=0;
    console.log(sum);
    console.log(y);
    for(var i=0; i<y.length; i++){
      sum+=y[i];
    }
    console.log(sum);
    console.log(sum/y.length);

    //Write a for-in loop that will navigate through the object below.

    var new_ninja = {
     name: 'Jessica',
     profession: 'coder',
     favorite_language: 'JavaScript', //like that's even a question!
     dojo: 'Dallas'
    }

    for (var key in new_ninja){
      console.log(key, ":", new_ninja[key]);
    }
