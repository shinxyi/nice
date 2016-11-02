// 1

var x = [3,5,'Dojo', 'rocks', 'Michael', 'Sensei']
// x.forEach(x => console.log(x))
// or with a for loop
// for (i in x){
//     console.log(x[i])
// }

x.push(100)
x.push( ["hello", "world", "JavaScript is Fun"])
// console.log(x)

var sumNums = (x,y) => typeof(y) == 'number' ? x + y : x
console.log(x.reduce(sumNums));

// or with for loop
// var sum = 0
// for (i in x){
//     if (typeof(x[i]) == 'number'){
//         sum += x[i]
//     }
// }
// console.log(sum)
var sum = 0
for (let i = 1; i < 500; i++){
    sum += i
}
console.log(sum)

var arr = [1, 5, 90, 25, -3, 0]

var min = arr[0]
var max = arr[0]
var sum = 0
for (i in arr){
    sum += arr[i]
    if (arr[i] > max){
        max = arr[i]
    }else if (arr[i] < min) {
        min = arr[i]
    }
}
avg = sum / arr.length
console.log(min, max, avg)
