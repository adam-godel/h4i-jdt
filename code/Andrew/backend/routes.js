const express = require('express');
const router = express.Router();
const controllers = require('./controllers.js');

router.get('/', controllers.getData);
router.post('/', controllers.postData);
router.delete('/:id', controllers.deletePost);

module.exports = router;