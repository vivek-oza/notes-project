import express from 'express';
import dotenv from 'dotenv';

import {dbConnection} from './database/dbConnection.js';

dotenv.config();

const app = express();

app.get('/', (req,res) => {
    res.send('Server is ready, test');
})

app.listen(3000, () =>{
    console.log('Server is running on port 3000')
});

 dbConnection();