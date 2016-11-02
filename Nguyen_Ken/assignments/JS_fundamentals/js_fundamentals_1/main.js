// 1
var x = [3, 5, 'Dojo', 'rocks', 'Michael', 'Sensei']

for (var i = 0; i < x.length; i++){
  console.log(i, x[i])
}

//2
x.push(100)

//3
var newArry = ["hello", "world", "Javascript is Fun"]
x.push(newArry)
console.log(x)

//4
var sum = 0
for (var i = 1; i < 501; i++){
  sum += i
}
console.log(sum)

//5
var y = [1, 5, 90, 25, -3, 0]
var min = y[0]
for (var i = 0; i < y.length; i++){
  if (y[i] < min){
    min = y[i]
  }
}
console.log(min)

//6
sum = 0
for (var i = 0; i < y.length; i++){
  sum += y[i]
}
console.log(sum/y.length)

//7
var new_ninja = {
  name: 'Jessica',
  profession: 'coder',
  favorite_language: 'JavaScript',
  dojo: 'Dallas'
}

for (var key in new_ninja){
  console.log(key, new_ninja[key])
}
