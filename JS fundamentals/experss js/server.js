const express = require('express')
const app = express()

app.set('view engine','ejs')

//optional: app.set('views', './views');   // Sets the directory for the views

app.get('/',(req,res)=>{
    // res.send("server running")
    res.render("index",{nottxt:'hello'})
})


const userRouter = require('./routes/users')

app.use('/test',userRouter)
app.listen(3333)