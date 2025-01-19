// import mongoose from "mongoose"; // Import mongoose
// import { type } from "os";

// const userSchema = new mongoose.Schema({
//     fullname: {
//         type: String,
//         required: true
//     },
//     email: {
//         type: String,
//         required: true,
//         unique: true
//     },
//     password: {
//         type: String,
//         required: true
//     },
//     isVerified: {
//         type: Boolean,
//         default: false
//     },
//     resetPasswordToken: {
//         type: String
//     },
//     resetPasswordExpiresAt: {
//         type: Date
//     },
//     verificationToken: {
//         type: String
//     },
//     verificationTokenExpiresAt: {
//         type: Date
//     }

// });

// export const User = mongoose.model("User", userSchema);    // Export userSchema

import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    fullname:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true,
    },
    isVerified: {
        type: Boolean,
        default: false
    },
    resetPasswordToken: String,
    resetPasswordExpiresAt: Date,
    verificationToken: String,
    verificationTokenExpiresAt: Date,
},{timestamps: true});
// created at and updated at fields will be automatically added into the document, because we gave second (optional object in mongoose.Schema() method)

export const User = mongoose.model('User', userSchema)