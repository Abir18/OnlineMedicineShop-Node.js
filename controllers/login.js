var express = require('express');
var router = express.Router();

var userModel = require.main.require('./model/user-model');


router.get('/', (req, res, next) => {
    res.render('pages/login');
});

router.post('/', (req, res, next) => {
    var user = {
		uname : req.body.uname,
		password : req.body.password
    };
    userModel.validate(user, function(result){
		if(result.length > 0) {
			req.session.name = req.body.uname;
			req.session.uid = result[0].id;
            res.render('pages/shop');
            // console.log(result);
		}else {
            res.redirect("pages/login");
            // console.log(result);
            // console.log(uname);
		}
	});

});

module.exports = router;