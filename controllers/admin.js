var express = require('express');
var router = express.Router();

var userModel = require.main.require('./model/user-model');


// GET => /admin
router.get('/', (req, res, next) => {
    res.render('admin/home');
});

// GET => /admin/login
router.get('/login', (req, res, next) => {
    res.render('admin/login');
});

// GET => /admin/products
router.get('/products', (req, res, next) => {
    res.render('admin/products');
});


// GET => /admin/userlist
router.get('/userlist', (req, res, next) => {
    // res.render('admin/customers');

    userModel.getAll(function(results){
		if(results.length > 0){
			
			var user = {
				name: req.session.name,
				uList: results
			};
			res.render('admin/customers', user);
        }
        else {
            res.render('admin/login');
        }
	});	
});

module.exports = router; 

