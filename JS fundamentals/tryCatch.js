// try..catch..finally example.
//scenario : an incomplete obj with missing data sent from a server and 

//creating custom error
let newerr = new Error("Custom error: field cannot be null");

try {
    let incompObj = { // assume the JSON is parsed into JS obj.
        name:null,
        age:34,
    };
    if(incompObj.name == null){
        throw newerr;
    }
  } catch (err) {
    console.log(err);
  }





    // some default props of the error object:
    // alert(err.name); 
    // alert(err.message); 
    // alert(err.stack); 
    // alert(err); 
    // // how is it diff from a regular object.
    // console.log(Object.values(err)); // returns [] since this is not enumerable