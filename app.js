/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var orm = require('orm');
var environment = require('./config/environment');
var routes = require('./config/routes');
// var db = require('./models');

var app = express();

environment(app);
app.use(orm.express("sqlite://./test.db", {
	define: function(db, models, next) {
		models.Blog = db.define("blog", {
			title: {
				type: "text"
			},
			content: {
				type: "text",
				size: 10000
			}
		}, {
			methods: {
				bigtitle: function() {
					return this.title;
				}
			}
		});
		next();
	}
}));
routes(app);

http.createServer(app).listen(app.get('port'), function() {
	console.log("Express server listening on port " + app.get('port'));
});