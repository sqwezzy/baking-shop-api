import * as mongoose from 'mongoose';
import {Schema} from 'mongoose';

const categorySchema = new Schema({
    id: {
        type: String,
    },
    code: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true,
    }
});

let Category = mongoose.model('category', categorySchema);
export {Category};
