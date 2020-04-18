import express from 'express'
import passport from 'passport'
import { addDish, getDishes, getDishById, deleteDish, updateDish, deleteManyDish } from '../controllers/dishController';
import { upload } from '../middleware/upload';



const dishRout = express.Router();

dishRout.post('/', passport.authenticate('jwt', { session: false }), upload.single('img'), addDish);
dishRout.get('/:id', getDishById);
dishRout.get('/', getDishes);
dishRout.put('/:id', passport.authenticate('jwt', { session: false }), upload.single('img'), updateDish);
dishRout.delete('/:id', passport.authenticate('jwt', { session: false }), deleteDish);
dishRout.delete('/delete/:categoryId', passport.authenticate('jwt', { session: false }), deleteManyDish);

export { dishRout };
