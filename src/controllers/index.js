// use express.Router() class and load it with controllers
const {getFruit, postFruit} = require('./fruit');
const {clientErrors, serverErrors} = require('./error')


module.exports = {clientErrors, serverErrors, getFruit, postFruit};