// let http=require("http");

// let server=http.createServer((req,res)=>{
//     if(req.url==='/user') res.end("me user endpoint per hu");
//     if(req.url==='/home') res.end("me home endpoint per hu");
// });

// server.listen(3000,()=>{
//     console.log("Server listening at port 3000")
// });


const express=require("express");

const app=express();


app.get('/',(req,res)=>{
    res.send("ok got it");
})

app.listen(3000,()=>{
    console.log("Server listen at port 3000")
})
