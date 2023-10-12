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
const paymentRowter = require('./routes/v1/payment.router');
const blogRouterController = require('./routes/v1/blog.router');
const likeRouterController = require('./routes/v1/like.router');
const commentRouterController = require('./routes/v1/comment.router');


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
app.use('/api/v1/payment', paymentRowter);
app.use('/api/v1/blogs', blogRouterController);
app.use('/api/v1/like', likeRouterController);
app.use('/api/v1/comment', commentRouterController);

app.get("/", (req, res) => {
    res.json({
        message: "hello travelbea"
    })
});


module.exports = app;