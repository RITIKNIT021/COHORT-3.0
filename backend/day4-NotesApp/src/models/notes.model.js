//scehema design

const mongoose=require('mongoose')

const notesSchema=new mongoose.Schema({
  title:{
    type:String,
    required:true
  },
  description:{
    type:String,
    required:true,
    minlength:[10,"min 10 character required"]
  }
})

const NotesModel=mongoose.model("notes",notesSchema);

module.exports=NotesModel;