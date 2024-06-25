
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
