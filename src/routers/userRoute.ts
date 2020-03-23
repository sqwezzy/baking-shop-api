import express from 'express'
import { login,registration } from '../controllers/userController';



const userRoute = express.Router();

userRoute.post('/registration', registration);
userRoute.post('/login', login)

export {userRoute};
