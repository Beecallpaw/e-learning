import express, { Express, Request, Response, NextFunction } from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv'
dotenv.config()

const fileUpload = require('express-fileupload')

const app: Express = express()
const port = process.env.PORT || 3333

app.use(express.json())
mongoose.connect(process.env.DATABASE_URL || "", { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log("connection successful")
});

app.use(fileUpload())

app.use(function (req: Request, res: Response, next: NextFunction) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods",
        "GET,POST,DELETE"
    );
    res.header("Access-Control-Allow-Headers",
        "Origin,X-Requested-With,Content-Type,Accept"
    );
    next();
});

app.get("/", (req: Request, res: Response) => {
    res.end("hello World")
})

const courseRouter = require("./Routes/courses");

app.use("/courses", courseRouter)

app.listen(port, () => {
    console.log(`App running on port ${port}`)
})

