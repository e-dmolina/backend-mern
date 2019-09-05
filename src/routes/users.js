const { Router } = require('express');
const router = Router();
const { getUsers, getUser, createUser, updateUser, deleteUser } = require('../controllers/users.controller');

//cuando escuche la ruta "/api/users" con el metodo GET o POST
router.route('/')
    .get(getUsers)
    .post(createUser);

router.route('/:id')
    .get(getUser)
    .put(updateUser)
    .delete(deleteUser);

module.exports = router;