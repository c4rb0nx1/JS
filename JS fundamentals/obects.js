let sampleObject = {
    naaam : "niranchan",
    age : 21,
};

let freeVar = "fr";

let computerObj = {
    [freeVar]: "free",
}
console.log(computerObj.fr.slice(0,3));

freeVar = "notfr";

console.log(computerObj["notfr"]); // output's undefined because " computed props assign keys from the variable at the time of creation of objects"


console.log(sampleObject.naaam);


const niranObj = {
    name : "Niranchan D",
    age : 21,
    id : "INT112",
    startDate : "18.06.2024",
    endDate : "30.04.2024",
};

let chanObj = {
    name : "Niranchan D",
    age : 21,
    id : "INT112",
    startDate : "18.06.2024",
    endDate : "30.04.2024",
};

let arrObj = [niranObj, chanObj];

console.log(arrObj[niranObj.id]);

// object references:
let newOBj  = niranObj;

console.log(newOBj, niranObj);

//after change to new obj

newOBj.id = "INT000";

console.log(newOBj, niranObj);

console.log(Object.keys(niranObj));
console.log(Object.values(niranObj));