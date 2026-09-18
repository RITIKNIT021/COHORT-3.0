const mongoose=require("mongoose");


const connectDb=async ()=>{
    try{
        await mongoose.connect("mongodb+srv://@cluster0.mjpayi4.mongodb.net/");
        console.log("db connected");
        
    }catch(error){
        console.log("connectio error",error);
        
    }
}

module.exports=connectDb;