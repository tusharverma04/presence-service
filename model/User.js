const moongose = require("mongoose") ;

const UserSchema = moongose.Schema({
    name: {
        type: String ,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    presence: {
        type: Boolean,
    }
}) ;

module.exports = moongose.model("user" , UserSchema) ;