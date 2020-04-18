import express from 'express'
import { addFeedback, getFeedbacks, deleteFeedback } from '../controllers/feedbackController';


const feedbackRout = express.Router();

feedbackRout.post('/', addFeedback);
feedbackRout.get('/', getFeedbacks);
feedbackRout.delete('/:id', deleteFeedback)


export { feedbackRout };