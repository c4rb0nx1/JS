const express = require('express')

const app = express()


// app.get("URL","function")
app.get("/",(req,res)=>{ 
    console.log("hw")
    res.send("working");
})
app.get("/alien/:name",(req,res)=>{ 
    // res.send("alien bruh");
    const name = req.params.name
    res.send("Hi "+name)
    // res.send(req);
})

app.listen(8080,(req,res)=>{
    console.log("server up")
});