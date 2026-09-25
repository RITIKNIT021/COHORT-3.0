//api logic and function

const NotesModel = require("../models/notes.model");

const createNoteController = async (req, res) => {
  try {
    let { title, description } = req.body;
    let newNote = await NotesModel.create({
      title,
      description,
    });
    return res.status(201).json({
      message: "note create successfully",
      data: newNote,
    });
  } catch (error) {
    return res.status(500).json({
      message: "internal server error",
    });
  }
};

const getAllNotesController = async (req, res) => {
  try {
    let notes = await NotesModel.find();
    return res.status(200).json({
      message: "notes fetch successfully",
      data: notes,
    });
  } catch (error) {
    return res.status(500).json({
      message: "internal server error",
    });
  }
};

const getNoteByIdController = async (req, res) => {
  try {
    let noteId = req.params.id;
    let note = await NotesModel.findById(noteId);
    return res.status(200).json({
      message: "not fecteh by id",
      data: note,
    });
  } catch (error) {
    return res.status(500).json({
        message:"internal server error"
    })
  }
};


const updateNoteController=async (req,res)=>{
  try {
    let body = req.body;
    let noteId=req.params.id;
    let updateNote=await NotesModel.findByIdAndUpdate(noteId,body,{new:true});
    return res.status(200).json({
        message:"note update successfully",
        data:updateNote
    })
  } catch (error) {
    console.log(error)
    return res.status(500).json({
        message:"internal server error",
    })
  }
}

const deleteNoteController=async (req,res)=>{
    try{
     let noteId=req.params.id;
     let delNote=await NotesModel.findByIdAndDelete(noteId)
     return res.status(200).json({
        message:"note delete successfully",
        data:delNote
     })
    }catch(error){

    }
}
module.exports = {
  createNoteController,
  getAllNotesController,
  getNoteByIdController,
  updateNoteController,
  deleteNoteController
};
