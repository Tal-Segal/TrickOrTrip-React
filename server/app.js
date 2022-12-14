//const path = require("path");
import express from "express";
import path from "path";
import http from "http";
import mongoose from "mongoose";
import { fileURLToPath } from 'url';
import cookieParser from 'cookie-parser';
import logger from 'morgan';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(logger('dev'));
app.use(cookieParser());

import cors from "cors";
app.use(cors());

const server = http.createServer(app);

import {Server} from "socket.io";
const io = new Server(server, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"],
    },
});
io.on("connection", (socket) => {
    console.log(`User Connected: ${socket.id}`);

    socket.on("join_room", (data) => {
        socket.join(data);
        console.log(`User with ID: ${socket.id} joined room: ${data}`);
    });

    socket.on("send_message", (data) => {
        socket.to(data.room).emit("receive_message", data);
    });

    socket.on("disconnect", () => {
        console.log("User Disconnected", socket.id);
    });
});

import indexRouter from './routes/home_routes.js';
import managementRouter from './routes/management_routes.js';
import galleryRoutes from './routes/gallery_routes.js';
import ordersRoutes from './routes/orders_routes.js';

app.use('/management', managementRouter);
app.use('/gallery', galleryRoutes);
app.use('/orders', ordersRoutes);
app.use("/", indexRouter);



import bodyParser from 'body-parser';
app.use(bodyParser.json())
app.use(cookieParser(process.env.COOKIE_SECRET))

import passport from 'passport';  // authentication
app.post('/login',
    passport.authenticate('local', { failureRedirect: '/login', failureMessage: true }),
    function(req, res) {
        res.redirect('/~' + req.user.username);
    });

const SESSION_SECRET='putanythinghere';

import session from 'express-session';
import UserDetails from '../server/model/user_model.js';
import LocalStrategy from "passport-local"
// Set up session
app.use(
    session({
        secret: SESSION_SECRET,
        resave: false,
        saveUninitialized: true,
    })
);
passport.use(new LocalStrategy.Strategy(UserDetails.authenticate()))
passport.serializeUser(UserDetails.serializeUser());
passport.deserializeUser(UserDetails.deserializeUser());
// Set up Passport
app.use(passport.initialize());
app.use(passport.session());


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


app.get('/serviceworker.js', function(request, response) {
    response.sendFile(path.resolve(__dirname, '../public', 'serviceworker.js'));
})

app.get('/index.html', function(request, response) {
    response.sendFile(path.resolve(__dirname, '../public', 'index.html'));
})

app.get('/offline.html', function(request, response) {
    response.sendFile(path.resolve(__dirname, '../public', 'offline.html'));
})


app.get('/express_backend', (req, res) => {
    res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
});



server.listen(5000, () => {
    console.log("SERVER RUNNING ON PORT 5000");
});

export default app;

/*app.listen(5000, function () {
    console.log(('Listening on port 5000 ...'))
});*/