const express = require('express');
const connectDB = require('./config/db');
const contactRoutes = require('./routes/contactRoutes');

const app = express();

// Connect Database
connectDB();

// Init Middleware
app.use(express.json());

// Define Routes
app.use('/api/contacts', contactRoutes);

// Test Route
app.post('/test', (req, res) => {
    console.log('Request Body:', req.body); // Log the request body
    res.send('Received');
});

// Start Server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
