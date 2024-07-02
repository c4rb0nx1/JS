const express = require('express')

const router = express.Router()


function middy(req,res,next) {
    console.log(req.params.id+' is being requested')
    next()
}

router.param('id',(req,res,next,id)=>{
    console.log("middleware param logging "+id)
    // here the middleware modified the value from the req body and passed it to the next middleware / route
    next()
})



router.route("/:id")
    .get(middy,(req,res)=>{ //either directly use middleware here or use .all(middleware) to use on all routes
    console.log("get trig")
    res.send("recieved a get req for id "+req.params.id)
})
    .post((req,res)=>{
    console.log('post trig ' + req.params.id)
    res.send("Recieved a post req for "+req.params.id)
})
    .delete((req,res)=>{
    console.log("delete trig")
    res.send(`User ${req.params.id} is deleted`)
})






//the above is the below equivalent code :)


// router.get("/",(req,res)=>{
//     console.log("test hit")
//     res.send("test endpoint")
// })


// router.get("/:id",(req,res)=>{
//     console.log("test hit at "+ req.params.id)
//     res.send("test endpoint "+ req.params.id)
// })

// router.get("/params",(req,res)=>{
//     console.log("params test endpoint")
// })



module.exports = router
// module.exports.middy = middy