import { Schema } from 'mongoose';
import * as mongoose from 'mongoose';

const FeedbackSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    feedback: {
        type: String,
        required: true,
    }
});

let Feedback = mongoose.model('feedback', FeedbackSchema);
export {Feedback}
