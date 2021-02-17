const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose') 
require('./Employee')

const app = express()

const Employee = mongoose.model("employee")
const mongoUri = "mongodb+srv://cnq:wt4CyzYSFPtBici@cluster0.rukps.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

mongoose.connect(mongoUri,{
    useNewUrlParser:true,useUnifiedTopology:true
})

mongoose.connection.on("connected",()=>{
    console.log("connected to mongo yehhhh")
})

mongoose.connection.on("error",(err)=>{
    console.log("error",err)
})

app.get('/',(req,res)=>{
    res.send("welcome to node js")
})

app.listen(3000,()=>{
    console.log("server running")
})