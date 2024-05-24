const express = require('express');
const dotenv = require('dotenv');
const routes = require('./src/routes/Router');
const app = express();
const PORT = 3000;

app.use(express.json());
dotenv.config();

app.use('/api',routes)

app.listen(PORT, ()=>{
    console.log(`server running on port ${PORT}`)
})