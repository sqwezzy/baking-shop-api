import express from 'express'
import { addDish, getDishes,getDishById,deleteDish} from "../controllers/dishController";
const dishRout = express.Router();

dishRout.post('/', addDish);
dishRout.get('/:id', getDishById);
dishRout.get('/', getDishes);
dishRout.delete('/:id', deleteDish);

export default dishRout;
