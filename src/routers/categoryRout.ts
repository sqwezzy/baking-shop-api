import express from 'express'
import { addCategory, getCategoryById, getCategories, deleteCategory, updateCategory } from '../controllers/categoryController'
import passport from 'passport'
const categoryRout = express.Router();

categoryRout.post('/',addCategory);
categoryRout.get('/:id', getCategoryById);
categoryRout.get('/',passport.authenticate('jwt', {session:false}), getCategories);
categoryRout.put( '/:id', updateCategory);
categoryRout.delete('/:id', deleteCategory);

export {categoryRout};
