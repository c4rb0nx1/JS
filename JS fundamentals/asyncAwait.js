async function f() {

    console.log('start');
    let promise = new Promise((resolve, reject) => {
      setTimeout(() => resolve("done!"), 1000)
    });
  
    let result =  promise; 
    // let result =  await promise; 
  
    console.log("end");
    console.log(result); 
  }
  
  f();