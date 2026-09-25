//rotes beetwen app and controller file

const exp = require("express");
const {
  createNoteController,
  getAllNotesController,
  getNoteByIdController,
  updateNoteController,
  deleteNoteController
} = require("../controllers/notes.controller");

const router = exp.Router();

router.post("/create", createNoteController);

router.get("/", getAllNotesController);

router.get("/:id", getNoteByIdController);

router.put("/update/:id",updateNoteController);

router.delete("/delete/:id",deleteNoteController);

module.exports = router;
