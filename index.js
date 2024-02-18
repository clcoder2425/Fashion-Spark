const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();
// need to add mongo url in .env file
mongoose.connect(process.env.MONGO_URL).then(() => {
    console.log('Connected to MongoDB');
}).catch(err => console.log(err));

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});