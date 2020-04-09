import express from 'express'
import { addDish, getDishes, getDishById, deleteDish, updateDish, deleteManyDish } from '../controllers/dishController';
import {upload} from '../middleware/upload';



const dishRout = express.Router();

dishRout.post('/', upload.single('img'), addDish);
dishRout.get('/:id', getDishById);
dishRout.get('/', getDishes);
dishRout.put('/:id', upload.single('img'), updateDish);
dishRout.delete('/:id', deleteDish);
dishRout.delete('/delete/:categoryCode', deleteManyDish);

export {dishRout};
