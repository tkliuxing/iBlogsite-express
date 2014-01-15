/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var environment = require('./config/environment');
var routes = require('./config/routes');
var db = require('./models');

var app = express();

environment(app);
routes(app);

// database orm, here is reference: http://sequelizejs.com/articles/express
db.sequelize.sync({
	force: true
});

http.createServer(app).listen(app.get('port'), function() {
	console.log("Express server listening on port " + app.get('port'));
});