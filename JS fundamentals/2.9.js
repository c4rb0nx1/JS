
//2.9 comparison op
console.log(2 > 1);
console.log(2 == 1);
console.log(2 != 1);

//string comaprison in lexicographical order
console.log('zapple'>'bapple');

//comparison on diff types
console.log('10'>9); //here str is conv to num
console.log('10' == 10); //here str is conv to num

// imp example
let ab = 0;
let ba = '0';

console.log(Boolean(ab)); // true as we know non empty str is 1
console.log(ab == ba); // str is converted to num so 0 == 0 true.
//-------------!

//strict equality

console.log(0 == false); //true on equality 
console.log(0 === false); //false because of diff types and strict op check without type conversion

// on '==' null and undefined are true and on >,<,<=,>= they null becomes 0 and undefined becomes NaN.

//imp example
// the below happens because comparison op converts null to 0 and equality check doesn't.
alert( null > 0 );  // (1) false
alert( null == 0 ); // (2) false
alert( null >= 0 ); // (3) true

// value undefined shouldn't be compared to other values, anyways it returns only false.
