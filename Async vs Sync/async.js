let a = ' i am';
var b = 10;
setTimeout(function(){
    console.log('Async ('+ b + ')');
},1000)

console.log('Not sync but iam ('+b+')');
b = 100;