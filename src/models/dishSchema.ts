import { Schema } from 'mongoose';
import * as mongoose from 'mongoose';

const dishSchema = new Schema({
    code: {
      type: Number,
      required: true  
    },
    name: {
        type: String,
        required: true,
    },
    categoryCode: {
        type: Number,
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
        required: true,
    }
});

let Dish = mongoose.model('dish', dishSchema);
export {Dish}
