var orm = require('orm');
var settings = require('../config/settings');
var fs = require('fs');
var path = require('path');
var connection = null;

function setup(db, cb) {
	fs.readdirSync(__dirname).filter(function(file) {
		return (file.indexOf('.') !== 0) && (file !== 'index.js')
	}).forEach(function(file) {
		require(path.join(__dirname, file))(orm, db);
	})
	return cb(null, db);
}

module.exports = function(cb) {
	if (connection) return cb(null, connection);
	orm.connect(settings.database, function(err, db) {
		if (err) return cb(err);
		db.settings.set('instance.returnAllErrors', true);
		setup(db, cb);
	});
};