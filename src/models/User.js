const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    userName: {
        type: String,
        required: true,
        //quita los espacios de mas
        trim: true,
        //identity
        unique: true
    }
}, {
    //agrega la fecha de creacion y modificacion
    timestamps: true
});

module.exports = model('User', userSchema);