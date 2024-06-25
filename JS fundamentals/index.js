//ex: 2.1 - 2.8

//2.3
"use strict"; // used to enfore use of modern way js | always must br on top ...otherwise ignored 

//2.4
let arr = ['1','2','3'] // VAR is used in old js ..yet to cover.
let name = 'niranchan';
arr[9] = '4'
console.log(arr[8], arr[9]); // empty strings are undefined in JS i.e from index 3 - 8.
const age = 21;

//2.6
//promt(title, default fill)
let per = prompt('unga per enna','wot is ur name'); 


let per_conf = confirm('is this your name: '+ per); //returns true or false

alert('status: '+ per_conf);
//2.7
let ak = 'ajith';
console.log(Boolean(ak)); // true
console.log(Boolean("")); //false
console.log(Boolean(" ")); //true
alert(Number("12"));  //number
alert(Number("12z"));  //NaN
console.log(String(age)); // string 21


//2.8
console.log('2.8 - operators');
let one = 1;
console.log(-one); // unary operation
console.log(one+1); //binary operation
console.log(10/2); // division
console.log(10%9); //remainder
console.log(2**3); //exponentiation
console.log(2*2); //multiplication

let s1 = 'str';
let s2 = 'ing';
//binary '+' applied to two strings performs concatination.
console.log(s1 + s2);

//auto string conversion (number to string) only works with '+' in binary.
//the compiler goes l to r and treated based on that
console.log(3+4+'1' + 2 + 2 + 2 +' is '+ typeof('1' + 2));
console.log(2 + 2 + '1' ); // "41" and not "221"

// other operators converts strings to number
console.log(2-'2');
console.log(2*'2');

// unary + : it does nothing when applied to a single number but when applied to a string it converts it to a number just like Number(var_name)
let no = 1;
let str = '1';
console.log(+no);
console.log(typeof(+str));

//imp example on "+" as binary and unary op
console.log(+'1' + +'2'); // here the strings are converted into number using the unary + and then addition op performed.

// assignment op returns aswell

let aa = 1;
let bb = 2;
let cc = 1 + (aa=bb+1); // assing op return new val to aa i.e 3

console.log(cc);
console.log(aa);

//chaining assignment

aa = bb = cc = 390; // aa = 390; bb = aa and cc = aa means the same
console.log(aa);
console.log(bb);
console.log(cc);

//modify in place

let mip = 2;
mip +=2;
console.log(mip);
mip -= 4;
console.log(mip);


//increment and decrement (applied only on variables)
let inc = 34;
inc++; //post fix | 35
console.log(inc++); //prints 35 and post incre 36
console.log(++inc); // pre incre to 37 and prints

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

//2.10 - conditional stmt

if(true){
    console.log('conditional satementsss bruh 1');
}

if(0){
    // :)
}else{
    console.log('conditional satementsss bruh 2');
}

//ternary op

let ter = (1>2)? 'true':'false';
console.log(ter)

//nested ternary

let nter = (1>2)? 'true' : (1<2)? '2ru':'false';
console.log(nter);

2.11 - logical op

//imp example
true || alert("not printed"); // true is returned and not alert because it hit true as the first trustworthy 
false || alert("printed"); // alert raised coz it's the first trust worthy encounter.


//?? - Nullish coalescing op - used to return first defined val

console.log(null ?? null ?? 1);