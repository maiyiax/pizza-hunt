const router = require('express').Router();
const { addComment, removeComment, addReply, removeReply } = require('../../controllers/comment-controller');

// Set up a route called /api/comments/:pizzaId and use the addComment() method as a POST callback
router
    .route('/:pizzaId')
    .post(addComment);

// set up another route for /api/comments/:pizzaId/:commentId and use the removeComment method as a DELETE callback
router
    .route('/:pizzaId/:commentId')
    .put(addReply)
    .delete(removeComment);
    
// delete route to handle removeReply
router
    .route('/:pizzaId/:commentId/:replyId')
    .delete(removeReply);
    
module.exports = router;