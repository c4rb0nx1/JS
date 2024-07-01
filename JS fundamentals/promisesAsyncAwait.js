let promise = new Promise((resolve, reject) => {  
    // the below code comes under executor block and no matter where the promise state is set, it is sent to .then / .catch handleres only after executor completes it's work.
    console.log("sample");
    let newerr = new Error("Custom error: field cannot be null");
    try {
        let incompObj = { // assume the JSON is parsed into JS obj.
            name:'niran', // (1)
            age:34,
        };
        if(incompObj.name == 'niran'){  // change condition to return 1 or 0 to trigger resolve() / reject()
            console.log("No error");
            resolve("resolved");
        }else{
            throw newerr; // throw's a custom error to catch block
        }
    }catch (err) {
        reject("rejected"); // error is catched and reject is triggered.
    }finally{
        console.log("completed");
    }
  });

  promise
    .then((result)=> { // if resolved();
        console.log(".then block");
        console.log(result);
    })
    .catch((result)=> { //if rejected(); 
        console.log(".catch block");
        console.log(result);
    }).finally(()=>{ // just same as the finally in try...catch...finally.
        console.log("regardless of the reject/resolve this block is 'finally' triggered.")
    });