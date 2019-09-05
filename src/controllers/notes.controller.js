const notesCtrl = {};

const Note = require('../models/Note');

//creo los metodos
notesCtrl.getNotes = async (req, res) => {
    const notes =  await Note.find();
    res.json(notes);
}

notesCtrl.getNote = async (req, res) => {
    const note = await Note.findById(req.params.id);
    res.json(note);
}

notesCtrl.createNote = async (req, res) => {
    const { title, content, date, author } = req.body;
    //estoy usando el destructuring
    const newNote = new Note({
        title,
        content,
        date,
        author
    });
    await newNote.save();
    res.json({message:'POST - created note'});
}

notesCtrl.updateNote = async (req, res) => {
    const { title, content, author } = req.body;
    await Note.findByIdAndUpdate(req.params.id, {
        title,
        author,
        content
    })
    res.json({message:'PUT - updated Note'});
}

notesCtrl.deleteNote = async (req, res) => {
    await Note.findByIdAndDelete(req.params.id);
    res.json({message:'DELETE - deleted Note'});
}

module.exports = notesCtrl;