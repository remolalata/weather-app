const express = require('express');
const cors = require('cors');
const weatherRouter = require('./api/routes/weather');

require('dotenv').config();

const PORT = process.env.PORT || 3001;

const app = express();

// Bodyparsing
// Enable CORS
app.use(express.json()); // parses incoming requests with JSON payloads
app.use(cors());

app.use('/api', weatherRouter);

// Startup
app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});