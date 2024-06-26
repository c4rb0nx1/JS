// IT support CLI
const prompt = require('prompt-sync')();

let name = prompt("Enter your name: ");
let empID = prompt("Your Employee ID here: ");
let empCat = empID.slice(0,3)
let empDep = empID.slice(3,);

let internArr = ['000','112','123'];
let empArr = ['000','321']

// case: to check if the emp id exists on a DB and return when found.
let empType = async () => {
    setTimeout(() => {
        switch(empCat){ // using set timeout to simulate a fetching delay.
        case 'INT':
            if (internArr.includes(empDep)) {
                if(empDep > 100 && empDep <= 200){
                    console.log("Status: DevOps Intern");
                }else if(empDep > 200 && empDep <=300){
                    console.log("Status: Product development");
                }
            }
            break;
        case 'EMP':
            if(empArr.includes(empDep)){
                if(empDep > 100 && empDep <= 200){
                    console.log("Status: DevOps Engineer");
                }else if(empDep > 200 && empDep <=300){
                    console.log("Status: Product Dev");
                }
            }
            break;   
        default:
            console.log("Not registred");

        }
    },5000);
}


if(empID.length == 6){
    empType();
    let office = prompt("Your office locaiton: ");
}else{
    console.log("Invalid Employee ID");
    empID = prompt("Your Employee ID here: ");
    empType();
}