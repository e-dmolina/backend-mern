const { Router } = require('express');
const router = Router();
const { getNotes, getNote, createNote, updateNote, deleteNote } = require('../controllers/notes.controller');

//cuando escuche la ruta "/api/notes" con el metodo GET o POST
router.route('/')
    .get(getNotes)
    .post(createNote);

router.route('/:id')
    .get(getNote)
    .put(updateNote)
    .delete(deleteNote);

module.exports = router;