const {getFruit, postFruit} = require('./controllers');


const router = require('express').Router();

router.get('/fruit', getFruit);
router.post('/fruit', postFruit);

module.exports = router;