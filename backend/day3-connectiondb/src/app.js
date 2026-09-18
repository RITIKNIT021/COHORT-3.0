const exp=require("express");

const NotesModel=require("./models/note.model")
const connectDb=require("./config/db");

const app=exp();

connectDb();
app.use(exp.json());


app.get("/",(req,res)=>{
    res.send(`Hello this is ritik's website`)
    
});

app.post("/create",async (req,res)=>{
    let {title,description}=req.body;
    const newNote=await NotesModel.create({
       title,
       description
    })
    res.send({
        success:true,
        message:"note create successfully",
        data:newNote
    })
})

module.exports=app