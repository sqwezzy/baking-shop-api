
import * as mongoose from "mongoose";
import {Schema} from "mongoose";

const categorySchema = new Schema({
    code: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true,
    }
});

export default mongoose.model('category', categorySchema);
