var _ = {
    map: function(arr, iteratee) {
        var newArr = [];

        for (i=0; i<arr.length; i++){
            newArr.push(iteratee(arr[i]));
        }

        return newArr;
    },
    reduce: function(arr, iteratee, memo) {
        var sum = 0;

        if (memo === null) { memo = arr[0]; }

        for (var i=0; i<arr.length; i++){
            sum += iteratee(memo, arr[i]);
        }

        return sum;
    },
    find: function(arr, predicate){
        var found = 0;

        for (var i=0; i<arr.length; i++){
            if (predicate(arr[i])){return arr[i];}
        }

        return undefined;
    },
    filter: function(arr, predicate){
        var newArr = [];

        for (var i=0; i<arr.length; i++){
            if (predicate(arr[i])){newArr.push(arr[i]);}
        }

        return newArr;
    },
    reject: function(arr, predicate){
        var newArr = [];

        for (var i=0; i<arr.length; i++){
            if (!predicate(arr[i])){newArr.push(arr[i]);}
        }

        return newArr;
    }
};
