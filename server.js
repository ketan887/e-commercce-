require('dotenv').config();
const express = require('express')
const { default: mongoose } = require('mongoose')
const app= express()
Port = 3000


app.get('/', (req,res)=>{
    res.send("server is running")
})

  mongoose.connect(process.env.MONGODB_URL)
  .then(()=> console.log("connected to mongodb"))
  .catch(err=> console.log(err))

app.listen(Port,()=>{
    console.log("app is running on ${Port}")
})