import express from 'express'
import { addCategory, getCategoryById,getCategories,deleteCategory  } from '../controllers/categoryController'
const categoryRout = express.Router();

categoryRout.post('/', addCategory);
categoryRout.get('/:id', getCategoryById);
categoryRout.get('/', getCategories);
categoryRout.delete('/:id', deleteCategory);

export default categoryRout;
