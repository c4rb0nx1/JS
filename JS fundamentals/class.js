class Eggjamble {
    constructor(obj1, obj2){
        this.o1 = obj1;
        this.o2 = obj2;
    }

    disp(){
        console.log(this.o1);
        console.log(this.o2);
    }
};

class kuttyegg extends Eggjamble{
    constructor(obj3,obj1,obj2){ //this constructor can be avoided and the constructor from parent can be used (1)
        super(obj1,obj2);
        this.o3 = obj3;
    }

    combidisp(){ //from (1) pass the args incase if wanna avoid constructor. (2)
        //(3) super(obj1, obj2) --> call the super here
        console.log(this.o3);
        super.disp();
    }
}

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

let donObj = {
    name : "john doeD",
    age : 21,
    id : "INT999",
    startDate : "18.06.2024",
    endDate : "30.04.2024",
};

let instanceEgg = new Eggjamble(niranObj,chanObj);
let kuttyInstanceEgg = new kuttyegg(donObj,niranObj,chanObj);
// instanceEgg.disp();

kuttyInstanceEgg.combidisp();