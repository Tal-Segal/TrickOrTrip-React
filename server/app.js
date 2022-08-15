//const path = require("path");
import express from "express";
import path from "path";
import mongoose from "mongoose";
import { fileURLToPath } from 'url';
import cookieParser from 'cookie-parser';
import logger from 'morgan';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(logger('dev'));
app.use(cookieParser());


import indexRouter from './routes/home_routes.js';
import managementRouter from './routes/management_routes.js';
import galleryRoutes from './routes/gallery_routes.js';

app.use('/management', managementRouter);
app.use('/gallery', galleryRoutes);
app.use("/", indexRouter);


import passport from 'passport';  // authentication
app.post('/login',
    passport.authenticate('local', { failureRedirect: '/login', failureMessage: true }),
    function(req, res) {
        res.redirect('/~' + req.user.username);
    });


mongoose.connect('mongodb://localhost:27017/TrickOrTrip',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    },
);
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
    console.log("Connected successfully");
});


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.static(path.join(__dirname, 'public')));

import cors from "cors";
app.use(cors());

app.get('/express_backend', (req, res) => { //Line 9
    res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' }); //Line 10
});

app.listen(5000, function () {
    console.log(('Listening on port 5000 ...'))
});

export default app;