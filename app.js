const express = require('express');
const app = express();
const cors = require('cors');

// routes path:
const homeEventRouter = require('./routes/v1/homeEvent.route');
const globalEventRouter = require('./routes/v1/globalEvent.route');
const bannerEventRouter = require('./routes/v1/bannerEvent.router');
const userCartRouter = require('./routes/v1/userCart.route');
const userControllerRoute = require('./routes/v1/userControll.route');
const userReviewRowter = require('./routes/v1/review.route');


// middleware
app.use(cors());
app.use(express.json());



// router
app.use('/api/v1/homeEvents', homeEventRouter);
app.use('/api/v1/globalEvents', globalEventRouter);
app.use('/api/v1/bannerEvents', bannerEventRouter);
app.use('/api/v1/userCarts', userCartRouter);
app.use('/api/v1/userControll', userControllerRoute);
app.use('/api/v1/reviews', userReviewRowter);

app.get("/", (req, res) => {
    res.json({
        message: "hello travelbea"
    })
});


module.exports = app;