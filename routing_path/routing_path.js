const homeEventRouter = require('../routes/v1/homeEvent.route');
const globalEventRouter = require('../routes/v1/globalEvent.route');
const bannerEventRouter = require('../routes/v1/bannerEvent.router');
const userCartRouter = require('../routes/v1/userCart.route');
const userControllerRoute = require('../routes/v1/userControll.route');
const userReviewRowter = require('../routes/v1/review.route');
const paymentRowter = require('../routes/v1/payment.router');
const blogRouterController = require('../routes/v1/blog.router');
const likeRouterController = require('../routes/v1/like.router');
const commentRouterController = require('../routes/v1/comment.router');
const mailRouterController = require('../routes/v1/sendmail.route');


module.exports.routes = [
    {
        path: 'homeEvents',
        variable: homeEventRouter
    },
    {
        path: 'globalEvents',
        variable: globalEventRouter
    },
    {
        path: 'bannerEvents',
        variable: bannerEventRouter
    },
    {
        path: 'userCarts',
        variable: userCartRouter
    },
    {
        path: 'userControll',
        variable: userControllerRoute
    },
    {
        path: 'reviews',
        variable: userReviewRowter
    },
    {
        path: 'payment',
        variable: paymentRowter
    },
    {
        path: 'blogs',
        variable: blogRouterController
    },
    {
        path: 'like',
        variable: likeRouterController
    },
    {
        path: 'comment',
        variable: commentRouterController
    },
    {
        path: 'mail',
        variable: mailRouterController
    }
]