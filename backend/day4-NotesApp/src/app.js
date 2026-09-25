const exp=require("express");
const connectDb = require("./config/db");

const app=exp();
const noteRouter=require("./routers/notes.router")

connectDb()

app.use(exp.json())


app.use("/notes",noteRouter)

module.exports=app