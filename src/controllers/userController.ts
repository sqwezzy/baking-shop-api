import { User } from '../models/userSchema';
import { Response, Request } from 'express';
import { constant } from '../config/const'
import bcrypt from "bcryptjs"
import jwt from 'jsonwebtoken'


async function login(req: Request, res: Response) {
    const candidate: any = await User.findOne({ email: req.body.email })
    if (candidate) {
        const passwordResult = bcrypt.compareSync(req.body.password, candidate.password);
        if (passwordResult) {
            const token = jwt.sign({
                userId: candidate._id,
                userEmail: candidate.email,
                userAdmin: candidate.isAdmin,
            }, constant.jwt, { expiresIn: 60 * 60 });
            res.status(200).json({
                token: `Bearer ${token}`,
                user: candidate,
            });
        } else {
            res.status(401).json('Wrong password');
        }
    } else {
        res.status(404).json("User with this email not found")
    }
}



async function registration(req: Request, res: Response) {
    const candidate = await User.findOne({ email: req.body.email })
    if (candidate) {
        res.status(409).json('User with this email exist')
    } else {
        const salt = bcrypt.genSaltSync(10)
        const password = req.body.password;
        const user = new User({
            name: req.body.name,
            surname: req.body.surname,
            email: req.body.email,
            password: bcrypt.hashSync(password, salt),
            isAdmin: req.body.isAdmin,
        })
        try {
            await user.save();
            res.status(201).json(user);
        } catch (error) {
            res.status(500).json(error.message)
        }
    }
}

export { login, registration };
