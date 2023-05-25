const express = require('express');
const app = express();
const PORT = process.env.PORT || 8000;

app.get('/messages', (req, res) => {
    res.sendStatus(204);
});