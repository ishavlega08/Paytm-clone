const mongoose = require("mongoose");
const { string } = require("zod");

mongoose.connect("mongodb+srv://admin:Ishav%402002@cohort-2.sa2qatc.mongodb.net/paytm")

const UserSchema = mongoose.Schema({
    username: String,
    password: String,
    firstName: String,
    lastName: String
});

const User = mongoose.model("User", UserSchema);

module.exports = {
    User
};