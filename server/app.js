// server/app.js
const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.static('templates'));
app.use(express.json());

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/templates/home.html');
});

// Add routes for products, cart, checkout, profile, etc.

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

