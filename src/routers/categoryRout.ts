import express from 'express'
import { addCategory, getCategoryById, getCategories, deleteCategory, updateCategory } from '../controllers/categoryController'

const categoryRout = express.Router();

categoryRout.post('/', addCategory);
categoryRout.get('/:id', getCategoryById);
categoryRout.get('/', getCategories);
categoryRout.put( '/:id', updateCategory);
categoryRout.delete('/:id', deleteCategory);

export {categoryRout};
