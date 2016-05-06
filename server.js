/**************************************
*************** Modules ***************
*************************************** */
var express        = require('express');
var app            = express();
var cookieParser   = require('cookie-parser');
var bodyParser     = require('body-parser');
var cons 		   = require('consolidate');
var path           = require('path');
var	cors           = require('cors');
var logger         = require('morgan');
var mongoose       = require('mongoose');
var MongoClient    = require('mongodb').MongoClient;
var config         = require('./config');
var methodOverride = require('method-override');
var compression    = require('compression');


/********************************************
*************** Configuration ***************
********************************************* */
var oneDay = 86400000;
var sevenDay = 604800000;
var db = mongoose.connection;

mongoose.connect('mongodb://admin:test@apollo.modulusmongo.net:27017/ig4ogyQi');
db.on('error',function (err) {
    console.log('Mongoose default connection error: ' + err);
});

db.on('connected', function () {
    "use strict"
    console.log("connection on connected");

    app.set('port', process.env.PORT || 5000);
    app.set('view engine','html');
    app.set('views', __dirname + '/views');

    app.engine('html', cons.swig);

    app.use(bodyParser.json());
    app.use(cors());
    app.use(logger('dev'));
    app.use(cookieParser());
    app.use(bodyParser.urlencoded({
        extended: true
    }));
	app.use(compression());
    app.use(methodOverride('X-HTTP-Method-Override'));
    app.use(express.static(__dirname + '/dist', { maxAge: sevenDay }));
    app.use('/bower_components',  express.static(__dirname + '/bower_components', { maxAge: sevenDay }));
    app.use('/resource',  express.static(__dirname + '/resource', { maxAge: sevenDay }));

    //app.use(express.static(path.join(__dirname, 'app'),{ maxAge: sevenDay }));

    require('./routes/routes.js')(app, db);

    app.listen(app.get('port'), function() {
        console.log('Express server listening on port ' + app.get('port'));
    });

});
