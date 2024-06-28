//using map instead of objects
let user1 = { 
    name:"niranchan",
    age:21,"id":"INT112",
    role:"DevOps intern",
};

let user2 = { 
    name:"aswin kumar",
    age:21,"id":"EMP007",
    role:"Sr DevOps Engineer",
};

let user3 = { 
    name:"john doe",
    age:21,"id":"EMP000",
    role:"SRE",
};

let peopleMap = new Map();
peopleMap.set(user1,{primaryDevicde:"MBP m1 pro",pheripheral1:"Benq 27Inch monitor", pheripheral2:"logitech mouse",});
peopleMap.set(user2,{primaryDevicde:"MBP m2 pro",pheripheral1:"Benq 27Inch monitor",});
peopleMap.set(user3,{primaryDevicde:"MBP m3 pro",pheripheral1:"Benq 27Inch monitor",});

console.log(peopleMap.get(user1));// print the values of the object key user1 

peopleMap.get(user1).pheripheral3 = "earphone" ; // adding more property to the value of the key user1

console.log(peopleMap.get(user1));

for (let entry of peopleMap.entries()){
    console.log('Keys:',entry[0]);
    console.log('values:',entry[1]);
    console.log();

}
console.log(peopleMap.keys());