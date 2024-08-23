const express = require("express");
const dotenv = require("dotenv").config()

const app = express();

const users = []
app.get('/',(req,res)=>{
    res.send("Hello world")
})

app.post('/user',(req,res)=>{
    const {firstname,lastname} = req.body
    users.push({firstname,lastname})

})
const port = process.env.PORT || 3000
app.listen(port,()=>console.log(`Server running on ${port}`))