//2.10 - conditional stmt
let ar = ['000','123','777'];
let ID = 'INT000';
let empType = ID.slice(0,3);
let empNo = ID.slice(ID.length - 3,ID.length);
console.log(empNo);
if( empType == 'INT'){
    console.log("You are a INTERN");
    if(empNo == '000'){
        console.log(`Your Intern number is ${empNo}`);
    }
}else if(empType== 'EMP'){
    console.log("You are a employee");
}else{
    console.log("You are yet to confirm");
}


//ternary op

let ter = (1>2)? 'true':'false';
console.log(ter)

//nested ternary

let nter = (1>2)? 'true' : (1<2)? '2ru':'false';
console.log(nter);

let op = (empType == "INT")?(empNo == '000')?console.log("You are a INTERN"):console.log("Yet to confirm"):(empType == "EMP")?console.log("you are employee"):console.log("Yet to confirm"); 
