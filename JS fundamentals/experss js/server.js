const express = require('express')
const app = express()

app.set('view engine','ejs')

//optional: app.set('views', './views');   // Sets the directory for the views

const userRouter = require('./routes/users')
app.use('/test',userRouter)


app.listen(3333)