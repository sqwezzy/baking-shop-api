import Dish  from "../models/dishSchema";

async function addDish(req: any, res: any) {
    const dish = new Dish({
        name: req.body.name,
        price: req.body.price,
        rating: req.body.rating,
        categoryCode: req.body.rating,
        img: req.body.img,
    });
    try {
        await dish.save();
        res.status(201).send(dish);
    } catch (error) {
        res.status(500).send(error.message)
    }
}

async function getDishById(req: any, res: any) {
    try {
        const dish = await Dish.findById(req.params.id);
        res.status(200).json(dish)
    } catch (error) {
        res.status(500).json(error.message)
    }
}

async function getDishes(req: any, res: any) {
    try {
        const dishes = await Dish.find({});
        res.status(200).send(dishes)
    } catch (error) {
        res.send(error.message)
    }
}

async function deleteDish(req: any, res: any) {
    try {
        await Dish.deleteOne({_id: req.params.id});
        res.status(200).json({
            message: 'Dish deleted',
        })
    } catch (error) {
        res.status(500).json(error.message)
    }
}

export {addDish,getDishById,getDishes,deleteDish};
