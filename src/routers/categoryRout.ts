import express from 'express'
import { addCategory, getCategoryById, getCategories, deleteCategory, updateCategory } from '../controllers/categoryController'
import passport from 'passport'
const categoryRout = express.Router();

categoryRout.post('/', passport.authenticate('jwt', { session: false }), addCategory);
categoryRout.get('/:id', getCategoryById);
categoryRout.get('/', getCategories);
categoryRout.put('/:id', passport.authenticate('jwt', { session: false }), updateCategory);
categoryRout.delete('/:id', passport.authenticate('jwt', { session: false }), deleteCategory);

export { categoryRout };
