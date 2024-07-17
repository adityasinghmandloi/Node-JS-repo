const mongoose= require("mongoose")

// SCHEMA

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required:true,
    },
    lastName: {
        type: String,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    job_title: {
        //required: true
        type: String,
    },
    gender: {
        type: String,
    },
},
{ timestamps: true }
);

const User = mongoose.model("user", userSchema)

module.export= User;