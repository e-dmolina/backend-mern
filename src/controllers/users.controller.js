const usersCtrl = {};
const User = require('../models/User');

//creo los metodos
usersCtrl.getUsers = async (req, res) => {
    const user = await User.find();
    res.json(user);
}

usersCtrl.getUser = async (req,res) => {
    const user = await User.findById(req.params.id);
    res.json(user);
}

usersCtrl.createUser = async (req, res) => {
    const { userName } = req.body;
    const newUser = new User({
        userName: userName
    });
    
    await newUser.save();

    res.json({message: 'POST - created user'});
}

usersCtrl.updateUser = async (req, res) => {
    const { userName } = req.body;
    await User.findByIdAndUpdate(req.params.id, { 
        userName: userName 
    });
    res.json({message: 'PUT - updated user'});
}

usersCtrl.deleteUser = async (req, res) => {
    await User.findByIdAndDelete(req.params.id);
    res.json({message: 'DELETE -deleted user'});
}


module.exports = usersCtrl;