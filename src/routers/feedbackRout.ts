import express from 'express'
import { addFeedback, getFeedbacks } from '../controllers/feedbackController';


const feedbackRout = express.Router();

feedbackRout.post('/', addFeedback);
feedbackRout.get('/', getFeedbacks);

export { feedbackRout };