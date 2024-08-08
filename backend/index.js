const express = require('express');
const cors = require('cors');
const db = require('./src/services/database');
const DataLoader = require('./src/data/data'); 
const Routes = require('./src/routes/routes');
const setupSwagger = require('./src/docs/Swagger');

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3006;

app.use(cors({
    origin: process.env.ORIGIN || "http://localhost:5173"
}));

app.use(express.json());
setupSwagger(app);

app.use('/api', Routes);


db._connect().then(() => {
    DataLoader.loadInitialData();
}).catch(err => {
    console.error('Error during database connection:', err);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});