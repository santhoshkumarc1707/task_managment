const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');
const taskRoutes = require('./routes/taskRoutes');
const searchRoutes = require('./routes/search');


require('dotenv').config();
app.use(cors());
require('./db');
const PORT = 8000;

app.use(bodyParser.json());
app.use('/users', userRoutes);
app.use('/tasks', taskRoutes);
app.use('/search', searchRoutes);



app.get('/', (req, res) => {
    res.json({
        message: 'Task Manager API is working!'
    })
});
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});