import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import { constant } from "./config/const";
import { categoryRout } from "./routers/categoryRout";
import { dishRout } from "./routers/dishRout";

const app = express();
        mongoose.connect(constant.mongoURI,
            { useNewUrlParser: true,
                useCreateIndex: true,
                useUnifiedTopology: true,
                useFindAndModify: false })
            .then(() => console.log('MongoDB connected.'))
            .catch(error => console.log(error));

app.use(
    cors({
            origin: ['http://localhost:4200'],
            optionsSuccessStatus: 200,
    }),
);
        app.use(bodyParser.urlencoded({extended: true}));
        app.use(bodyParser.json());

        app.use('/categories',categoryRout);
        app.use('/dishes', dishRout);
export {app}
