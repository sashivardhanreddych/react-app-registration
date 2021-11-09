const express = require('express');
const mongoose = require('mongoose');
const port=1109;
const app=express();
const url="mongodb+srv://schandra:Sashi@cluster0.jtfwe.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
app.use(express.urlencoded({extended: true}))
app.use(express.json());

mongoose.connect(url,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
const con=mongoose.connection;

con.once("open",function(){
    console.log("Database connected successfully");
})

app.get('/',(req,res)=>{
    
    res.send("Get Request")
})

app.post('/data',(req,res)=>{
    res.send("POST Request")
})

app.listen(port,()=>{
console.log("Server Started")
});