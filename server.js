const express = require('express');
const app = express();
const PORT = process.env.PORT || 8000;
app.listen('app is listening on port: ', PORT);
app.get('/messages', (req, res) => {
    res.sendStatus(204);
});