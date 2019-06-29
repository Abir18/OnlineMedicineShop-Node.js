var express = require('express');
var path = require('path');
var bodyParser 		= require('body-parser');
var exSession 		= require('express-session');
var cookieParser 	= require('cookie-parser');


var shop = require('./controllers/shop');
var doctor = require('./controllers/doctor'); 
var login = require('./controllers/login');
var login = require('./controllers/login');
var registration = require('./controllers/registration');
var admin = require('./controllers/admin');
var app = express();

var port = 3000;
  
app.set('view engine', 'ejs');
// app.use('views', 'views');

app.use(exSession({secret: 'my top secret code', saveUninitialized: true, resave: false}));
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, './public')));
// app.use(express.static('./public'));

app.use('/', shop);
app.use('/doctor', doctor);
app.use('/login', login);
app.use('/registration', registration);
app.use('/admin', admin);



app.listen(port, () => {
    console.log('Server is running on port '+port);
});