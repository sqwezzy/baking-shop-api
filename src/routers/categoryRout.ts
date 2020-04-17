import express from 'express'
import { addCategory, getCategoryById, getCategories, deleteCategory, updateCategory } from '../controllers/categoryController'
import passport from 'passport'
const categoryRout = express.Router();

categoryRout.post('/', passport.authenticate('jwt', { session: false }), addCategory);
categoryRout.get('/:id', getCategoryById);
categoryRout.get('/', getCategories);
categoryRout.put('/:id', updateCategory);
categoryRout.delete('/:id', deleteCategory);

export { categoryRout };
