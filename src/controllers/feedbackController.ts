import { Feedback } from '../models/feedbackSchema';
import { Response, Request } from 'express';

async function addFeedback(req: Request, res: Response) {
    const feedback = new Feedback({
        name: req.body.name,
        feedback: req.body.feedback
    });
    try {
        await feedback.save();
        res.status(201).json(feedback);
    } catch (error) {
        res.status(500).json(error.message)
    }
}

async function getFeedbacks(req: Request, res: Response) {
    try {
        const feedbacks = await Feedback.find({});
        res.status(200).json(feedbacks)
    } catch (error) {
        res.status(404).json(error.message)
    }
}

async function deleteFeedback(req: Request, res: Response) {
    try {
        const feedback = await Feedback.findById(req.params.id)
        await Feedback.deleteOne({ _id: req.params.id });
        res.status(200).json(
            {
                message: 'Feedback deleted',
                feedback: feedback,
            })
    } catch (error) {
        res.status(500).json(error.message)
    }
}

export { addFeedback, getFeedbacks, deleteFeedback }