const express = require('express');

const router = express.Router();

const blogRouterController = require('../../controller/blog.controller')


router.route('/create-blog')
    .post(blogRouterController.createBlogController)

router.route('/')
    .get(blogRouterController.getBlogController)


router.route('/:id')
    .delete(blogRouterController.deleteBlogController)
    .patch(blogRouterController.updateBlogController)



module.exports = router;