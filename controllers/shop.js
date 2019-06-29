var express = require("express");
var router = express.Router();

var userModel = require.main.require("./model/user-model");

router.get("/", (req, res, next) => {
  // res.render('pages/shop');
  userModel.getAllProducts(function(results) {
    // if(results.length > 0) {
      
      var user = {
        name: req.session.name,
        pList: results
      };
      
      res.render("pages/shop", user);
      
      // }
    });
  });
  
  
  module.exports = router;