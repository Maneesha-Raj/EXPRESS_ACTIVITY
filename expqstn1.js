
const express = require('express');


const app = express();


function requestLogger(req, res, next) {
    console.log(`${req.method} ${req.url}`);
    next(); 
}


app.use(requestLogger);


app.get('/', (req, res) => {
    res.send('Welcome to the online store!');
});

const port = 3000;
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
