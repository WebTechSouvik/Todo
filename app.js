const express=require("express")
const path = require('path');
const todoRouter = require("./routes/todoRoute");
const userRouter = require("./routes/userRoute");
var session = require('express-session')
const app= express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))



app.use(session({
  secret: 'keyboardcat',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}))

app.set('view engine', 'ejs');

// Set the views directory
app.set('views', path.join(__dirname, 'views'));


app.use("/todo",todoRouter)
app.use("/user",userRouter)



module.exports=app