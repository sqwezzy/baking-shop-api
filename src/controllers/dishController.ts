import  { Dish } from '../models/dishSchema';
import { Response, Request } from 'express';
import { Db } from 'mongodb';



async function addDish(req: Request, res:Response ) {
    const dish = new Dish({
        name: req.body.name,
        price: req.body.price,
        rating: req.body.rating,
        categoryCode: req.body.categoryCode,
        img: req.file.path,
        weight: req.body.weight,
        composition: req.body.composition,
        description: req.body.description,
    });
    try {
        await dish.save();
        res.status(201).json(dish);
    } catch (error) {
        res.status(500).json(error.message)
    }
}

async function getDishById(req: Request, res: Response) {
    try {
        const dish = await Dish.findById(req.params.id);
        res.status(200).json(dish)
    } catch (error) {
        res.status(500).json(error.message)
    }
}

async function getDishes(req: Request, res: Response) {
    try {
        const dishes = await Dish.find({});
        res.status(200).json(dishes)
    } catch (error) {
        res.status(500).json(error.message)
    }
}

async function deleteDish(req: Request, res: Response) {
    try {
        await Dish.deleteOne({_id: req.params.id});
        res.status(200).json('Dish deleted')
    } catch (error) {
        res.status(500).json(error.message)
    }
}

async function updateDish(req: Request, res: Response) {
    let requestData = req.body;

    if(req.file) {
      requestData.img = req.file.path;
    }
    try {
        console.log(req.file.path);
        const dish = await Dish.findOneAndUpdate(
            {_id: req.params.id},
            {$set: requestData},
            {new: true}
        );
        res.status(200).json(dish)
    } catch (error) {
        res.status(500).json(error.message)
    }
}

async function deleteManyDish(req: Request, res:Response) {
    try{
        await Dish.deleteMany({categoryCode: req.params.categoryCode});
        res.status(200).json("Dishes deleted")
    } catch (error) {
        res.status(500).json(error.message)
    }
}

export { addDish,getDishById,getDishes,deleteDish, updateDish, deleteManyDish };
