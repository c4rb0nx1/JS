let fs = require('fs')

fs.readFile('sample.js','utf8',(err,data)=>{
    console.log(data)
})

fs.writeFile('sample.js','console.log("written from another file)',(err)=>{ // this thing re writes the content of the file. 
    console.log("data written")
})

fs.appendFile('sample.js','console.log("written from another file)',(err)=>{ // this thing re writes the content of the file. 
    console.log("data written")
})

fs.unlink('sampple.js',(err)=>{ // this deletes the file delete = unlink here.
    console.log('deteled')
})