
const express = require('express');


const app = express();


app.use(express.json());
const reviews = [];

function submitReview(req, res, next) {
    const { title, content } = req.body;

    if (!title || !content) {
        return res.status(400).send('Please provide both title and content for the review.');
    }

    const review = { title, content };
    reviews.push(review);

    res.status(201).json({ message: 'Review submitted successfully', review });
}

app.post('/submit-review', submitReview);


const port = 3001;
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
