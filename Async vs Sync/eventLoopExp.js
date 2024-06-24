console.log('event loop - start');

setTimeout(function(){
    console.log('1');
},100);

setTimeout(function(){
    console.log('0');
},0);

console.log('event loop - end');