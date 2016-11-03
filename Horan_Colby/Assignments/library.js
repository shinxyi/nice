var _ = {
    map: function(arr, callback) {
        var newarr = []
        for(var i = 0;i < arr.length;i++){
            newarr.push(callback(arr[i]))
        }
    },
    reduce: function(arr, callback){
        x = 0
        for(var i = 0;i <arr.length;i++){
            x += callback(arr[i])
        }
    },
    find: function(arr, callback) {   
        for(var i = 0;i < arr.length;i++){
            if (arr[i] == callback){
                return arr[i]
            }
        }
    },
    filter: function(arr, callback) { 
        newarr = []
        for (var i = 0;i < arr.length;i++){
            if (arr[i] == callback){
                newarr.push(callback(arr[i]))
            }
        }
    },
    reject: function() { 
        newarr = []
        for (var i = 0;i < arr.length;i++){
            if (arr[i] != callback){
                arr.push(callback(arr[i]))
            }
        }
    }
}
