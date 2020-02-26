import { Schema } from 'mongoose';
import * as mongoose from "mongoose";


const userSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    surname: {
        type: String,
        required: true
    },
    login: {
        type: String,
        required: true,
            unique: true
    },
    password: {
        type: String,
        required: true
    },
    isAdmin: {
        type: Boolean,
        required: true,
    }
});

let User = mongoose.model('user', userSchema);
export { User };
