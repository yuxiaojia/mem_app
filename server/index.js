import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/posts.js'; 


const app = express();



app.use(bodyParser.json({limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true }));
app.use(cors());

app.use('/posts', postRoutes); //route


const CONNECTION_URL = 'mongodb+srv://jarvisjia:Jia4dream@cluster0.yd6wqeq.mongodb.net/?retryWrites=true&w=majority';
const PORT = process.env.PORT  || 5000;

mongoose.connect(CONNECTION_URL)
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))) //template string use ` not '
    .catch((error) => console.log(error.message));  //print in console with error
