// 2.13 - loops
let i = 0;
k = 0;
let a = '*'
//while
while (i < 10) { // shows 0, then 1, then 2
    
    for(;k<i;k++){
        process.stdout.write(a);
    }
    k=0;
    i++;
    console.log("\n");
}

//do while
do{
    console.log('i am do while ' + i);
    i++;
}while(i<3);

