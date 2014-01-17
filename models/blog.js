module.exports = function(sequelize, DataTypes) {
	var Blog = sequelize.define('Blog', {
		title: DataTypes.STRING,
		content: DataTypes.TEXT
	})
	return Blog
}