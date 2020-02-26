import { Category } from '../models/categorySchema';
import {Request, Response} from 'express';


async function addCategory(req: any, res: any) {
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

async function getCategoryById(req: any, res: any) {
    try {
        const category = await Category.findById(req.params.id);
        res.status(200).send(category)
    } catch (error) {
        res.status(500).send(error.message)
    }
}

async function getCategories(req: any, res: any) {
    try {
        const categories = await Category.find({});
        res.status(200).send(categories)
    } catch (error) {
        res.send(error.message)
    }
}

async function deleteCategory(req: any, res: any) {
    try {
        await Category.deleteOne({_id: req.params.id});
        res.status(200).send('Category deleted')
    } catch (error) {
        res.status(500).send(error.message)
    }
}

async function updateCategory(req: Request, res: Response) {
    try {
        const dish = await Category.findOneAndUpdate(
            {_id: req.params.id},
            {$set: req.body},
            {new: true}
        );
        res.status(200).json(dish)
    } catch (error) {
        res.status(500).json(error.message)
    }
}

export { addCategory, getCategories, getCategoryById, deleteCategory, updateCategory }
