
try{
    let obj = {
        name:"allen",
        age:23,
        place:"chennai",
    }
    try{
        if(obj.name != 'sekar'){
            throw new SyntaxError('idhellam joke ah');
        }
    }catch(err){
        if(err){
            console.log("nil");
        }
        else{
            throw new SyntaxError("pass pass");
        }
    }
}catch (err){
    console.log(err);
}