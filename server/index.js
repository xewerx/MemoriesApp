import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/posts.js';

const app = express();

app.use('/posts', postRoutes);

app.use(bodyParser.json({ limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true}));
app.use(cors());

const MONGO_DB_URL = 'mongodb+srv://jsmaster:5vlD1iM3MDXrZmmm@cluster0.xsjbj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

mongoose.connect(MONGO_DB_URL, { useNewUrlParser: true, useUnifiedTopology: true})
    .then( () => app.listen(PORT, () => console.log("Server work on port: " + PORT)))
    .catch( (err) => console.log("Database connection error: " + err.message));