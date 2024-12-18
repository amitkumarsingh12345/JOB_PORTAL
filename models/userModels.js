import mongoose from "mongoose";
import validator from 'validator';

const userSchema = mongoose.Schema({
    firstName: {
        type: String,
        require: [true, 'Name is require']
    },
    lastName: {
        type: String,
    },
    email: {
        type: String,
        require: [true, 'Email is require'],
        unique: true,
        validate: validator.isEmail
    },
    password: {
        type: String,
        require: true
    },
    location: {
        type: String,
        default: 'Allahabad'
    }
},
    { timestamps: true }
);
export default mongoose.model('user', userSchema);