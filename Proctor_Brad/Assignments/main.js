var x = [3,5,'Dojo','rocks','Michael','Sensei'];
for(var i = 0; i < x.length; i++){
    console.log(x[i]);
}


x.push(100);


x = ['hello','world','JavaScript is fun'];
console.log(x);


sum = 0;
for(var i = 1; i < 501; i++){
    sum += i;
}
console.log(sum);


arr = [1,5,90,25,-3,0];
min = arr[0];
for(var i = 1; i < arr.length; i++){
    if(arr[i] < min){
        min = arr[i];
    }
}
console.log(min);


arr = [1,5,90,25,-3,0];
sum = 0;
for(var i = 0; i < arr.length; i++){
    sum += arr[i];
}
console.log(sum/arr.length)


var new_ninja = {
    name: 'Jessica',
    profession: 'coder',
    favorite_language: 'JavaScript',
    dojo: 'Dallas'
}
for(index in new_ninja){
    console.log(index,new_ninja[index]);
}
