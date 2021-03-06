import { Schema } from 'mongoose';
import * as mongoose from 'mongoose';
import { Category } from './categorySchema';

const dishSchema = new Schema({
    id: {
        type: String,
    },
    name: {
        type: String,
        required: true,
    },
    categoryId: {
        type: Schema.Types.ObjectId,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    rating: {
        type: Number,
        required: true,
    },
    img: {
        type: String,
    },
    weight: {
        type: Number,
        required: true,
    },
    composition: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true,
    }
});

let Dish = mongoose.model('dish', dishSchema);
export {Dish}
