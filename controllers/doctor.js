var express = require('express');
var router = express.Router();

var userModel = require.main.require('./model/user-model');

router.get('/', (req, res, next) => {
    res.render('pages/doctor');
});

module.exports = router;  