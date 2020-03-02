import  { Dish } from '../models/dishSchema';
import { Response, Request } from 'express';


async function addDish(req: Request, res:Response ) {
    const dish = new Dish({
        code: req.body.code,
        name: req.body.name,
        price: req.body.price,
        rating: req.body.rating,
        categoryCode: req.body.categoryCode,
        img: req.body.img,
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
    try {
        const dish = await Dish.findOneAndUpdate(
            {_id: req.params.id},
            {$set: req.body},
            {new: true}
        );
        res.status(200).json(dish)
    } catch (error) {
        res.status(500).json(error.message)
    }
}

export { addDish,getDishById,getDishes,deleteDish, updateDish};
