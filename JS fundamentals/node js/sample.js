// console.log("hw");
let http = require("http")

http.createServer((req,res)=>{
    console.log("server running on localhost:8080")
    res.writeHead(200,{
        'content-type':'text/html'
    })
    res.write("hello form node") // use when multiple needs to be sent and 
    res.end() // use directly end like res.end("hello from node") for a single msg
}).listen(8080)

