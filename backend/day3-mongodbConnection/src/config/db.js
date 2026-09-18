const mongoose=require("mongoose");


const connectDb=async()=>{
    try {
       await mongoose.connect("mongodb+srv://rk0342886_db_user:46SHZMOXKdb3zEQY@cluster0.mjpayi4.mongodb.net/",{family:4});

        console.log("mongoDb connection ho chuka");
    } catch (error) {
        console.log("connecton error",error)
    }
    
}

module.exports=connectDb;