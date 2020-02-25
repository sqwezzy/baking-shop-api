import Category from "../models/categorySchema";




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
        res.status(200).json(category)
    } catch (error) {
        res.status(500).json(error.message)
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
        res.status(200).json({
            message: 'Category deleted',
        })
    } catch (error) {
        res.status(500).json(error.message)
    }
}

export {addCategory, getCategories, getCategoryById, deleteCategory}
