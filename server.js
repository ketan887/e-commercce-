const express = require('express')
const app= express()
Port = 3000


app.get('/', (req,res)=>{
    res.send("server is running")
})



app.listen(Port,()=>{
    console.log("app is running on ${Port}")
})