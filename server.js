const express = require('express')
const app = express()
require('dotenv').config()
const port = process.env.PORT || 5000

app.use(express.static("public"))
app.use(express.urlencoded({extended: true}))

// !important! 
// you need to install the following libraries |express|[dotenv > if required]
// or run this command >> npm i express dotenv 
app.set('view engine', 'ejs')


const userRouter =require('./routes/users') 

app.use('/users', userRouter)






app.listen(port , ()=> console.log('> Server is up and running on port : ' + port))