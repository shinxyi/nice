<!DOCTYPE html>

<html lang="en" xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta charset="utf-8" />
    <title></title>
    <script>
        var x = [3, 5, 'Dojo', 'rocks', 'Michael', 'Sensei'];
        for (var i = 0; i < x.length; i++)
        {
            console.log(x[i]);
        }
        x.push(100);
        y = ['hello', 'world', 'javascript is fun'];
        x.push(y);
        console.log(x);

        var sum;
        var counter = 1;
        while (counter < 500) {
            sum += counter;
            counter++;
        }
        console.log(sum);

        var arr = [1, 5, 90, 25, -3, 0];
        var w;
        for (var i = 1; i < arr.length; i++) {
            var smallest = arr[i - 1];
            if (smallest > arr[i]) {
                w = arr[i];
            }
        }
        console.log(w);

        var arr2 = [1, 5, 90, 25, -3, 0];
        var sum;

        for (var i = 0; i < arr2.length; i++) {
            sum += arr2[i];
        }
        console.log(sum / arr2.length);


    </script>
</head>
<body>

</body>
</html>