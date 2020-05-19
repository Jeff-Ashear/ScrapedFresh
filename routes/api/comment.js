const db = require('../../models');
const router = require('express').Router();

router.post('/', function (req, res) {
    db.Comments.create(req.body)
        .then(comment => {
            res.send({
                sucess: true,
                message: "Comment posted to db",
                comments: comment
            });
        })
        .catch(err => {
            res.send({
                success: false,
                message: err
            });
        });
})

router.get('/:articleId', function (req, res) {
    db.Comments.find({ article: req.params.articleId })
        .then(comment => {
            res.send({
                success: true,
                message: "comment found",
                comments: comment
            });
        })
        .catch(err => {
            res.send({
                success: false,
                message: err
            });
        });
})

module.exports = router;