// IT support CLI
const prompt = require('prompt-sync')();



console.log("!-------| Asset Checker |\n");
let name = prompt("Enter your name: ");
let empID = prompt("Your Employee ID here: ");
let empCat = empID.slice(0,3)
let empDep = empID.slice(3,);

// object creation - start
let details;
let niranObj = {
    name : "Niranchan D",
    age : 21,
    id : "INT112",
    startDate : "18.06.2024",
    endDate : "30.04.2024",
    role : "intern - Devops engineer",
    assets : ["MacBook Pro M1 (SSLAP112)","Monitor - benq (SS207)", "Mouse - Logitech (SS208)"],
};

let abhiObj = {
    name : "Abhinandan G",
    age : 20,
    id : "INT137",
    startDate : "18.06.2024",
    endDate : "30.04.2024",
    role : "intern - Product Developer",
    assets : ["MacBook Pro M1 (SSLAP137)","Monitor - benq (SS201)"],
};

let aswinObj = {
    name : "aswin kumar",
    age : 26,
    id : "EMP007",
    startDate : null,
    endDate : null,
    role : "senior Devops Engineer",
    assets : ["MacBook ultra pro max ultra (SSLAP007)","Monitor - benq (SS207)", "Mouse - Logitech (SS208)"],
};
// object creation - end

//obj array to maintain all the employee details.
let empDetObjArr = [niranObj, abhiObj,aswinObj];

// func dec - start. 
let defaultError = () => {
    console.log("user",name,"has no matching record with",empID);
}
// func to check wether the INT id is ther r not.
let check = () => { 
    for(let k in empDetObjArr){
        details = empDetObjArr.find(fun => fun.id == empID);
    }
    return !!details; // something newwww
}



// -----function dec end .
let empType = async () => {
    setTimeout(() => {
        switch(empCat){ // using set timeout to simulate a fetching delay.
        case 'INT':
            if(check()){ // check returns tru or fls after checking
                console.log("success", details.assets);
            }
            break;
        case 'EMP':
            if(check()){
                console.log("Success", details.assets);
            }
            break;   
        default:
            console.log("Not registred");

        }
    },1000);
    let office = prompt("Your office locaiton: ");
}


if(empID.length == 6){
    empType();
}else{
    console.log("Invalid Employee ID");
    empID = prompt("Your Employee ID here: ");
    empType();
}