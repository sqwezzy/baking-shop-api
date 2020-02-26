import express from 'express'
import { addDish, getDishes, getDishById, deleteDish, updateDish } from '../controllers/dishController';
import { categoryRout } from './categoryRout';


const dishRout = express.Router();

dishRout.post('/', addDish);
dishRout.get('/:id', getDishById);
dishRout.get('/', getDishes);
categoryRout.put('/:id', updateDish);
dishRout.delete('/:id', deleteDish);

export {dishRout};
