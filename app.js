import dotenv from 'dotenv';
dotenv.config();
import express, { json } from 'express';
import cors from 'cors';
const app = express();
import DBConnection from './config/dbConnection.js'
const DB_URL = process.env.DATABASE_URL;
const port = process.env.PORT;
import routes from './routes/routes.js';

app.use(cors());

app.use(express.json());
//Databse connection
DBConnection(DB_URL);

app.use('/api/user',routes)

app.listen(port, ()=>{
    console.log(`Server listening on port : ${port}`)
})
