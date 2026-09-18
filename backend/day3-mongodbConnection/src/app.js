 const dns = require('node:dns');
 dns.setServers(['8.8.8.8', '1.1.1.1']); 


const express=require("express");



const app=express();

app.use(express.json())



module.exports=app;