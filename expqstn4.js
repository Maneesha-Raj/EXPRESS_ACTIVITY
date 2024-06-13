
const express = require('express');

const app = express();

app.get('/welcome/:userId', (req, res) => {
    const userId = req.params.userId;
    res.send(`Welcome, User ${userId}!`);
});


const port = 3000;
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
