import { Category } from '../models/categorySchema';
import {Request, Response} from 'express';
import multer from 'multer'
const upload = multer({dest: 'uploads/'});


async function addCategory(req: Request, res: Response) {
    const category = new Category({
        code: req.body.code,
        name: req.body.name,
    });
    try {
        await category.save();
        res.status(201).send(category);
    } catch (error) {
        res.status(500).send(error.message)
    }
}

async function getCategoryById(req: Request, res: Response) {
    try {
        const category = await Category.findById(req.params.id);
        res.status(200).send(category)
    } catch (error) {
        res.status(500).send(error.message)
    }
}


async function getCategories(req: Request, res: Response) {
    try {
        const categories = await Category.find({});
        res.status(200).send(categories)
    } catch (error) {
        res.send(error.message)
    }
}

async function deleteCategory(req: Request, res: Response) {
    try {
        await Category.deleteOne({_id: req.params.id});
        res.status(200).json('Category deleted')
    } catch (error) {
        res.status(500).json(error.message)
    }
}

async function updateCategory(req: Request, res: Response) {
    console.log(req.body);
    try {
        const category = await Category.findOneAndUpdate(
            {_id: req.params.id},
            {$set: req.body},
            {new: true}
        );
        res.status(200).json("Category change")
    } catch (error) {
        res.status(500).json(error.message)
    }
}

export { addCategory, getCategories, getCategoryById, deleteCategory, updateCategory }
