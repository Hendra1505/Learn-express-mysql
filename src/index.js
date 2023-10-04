require ('dotenv').config();
const PORT = process.env.PORT;
const express = require('express');
const userRoutes = require('./routes/users');
const middlewareLogRequest = require('./middleware/logs');

const app = express();
app.use(middlewareLogRequest);
app.use(express.json());

app.use('/users', userRoutes);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
});