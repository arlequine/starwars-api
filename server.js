const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');
const characterRoutes = require('./routes/characterRoutes');
require('dotenv').config();

const app = express();
connectDB();

app.use(bodyParser.json());
app.use('/api/characters', characterRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});