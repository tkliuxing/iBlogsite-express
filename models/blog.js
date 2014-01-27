var moment = require('moment');
var Intl = require('Intl');

module.exports = function(orm, db) {
	var Blog = db.define('Blog', {
		title: {
			type: 'text',
			required: true
		},
		body: {
			type: 'text',
			required: true,
			big: true
		},
		createdAt: {
			type: 'date',
			required: true,
			time: true
		}
	}, {
		hooks: {
			beforeValidation: function() {
				this.createdAt = new Date();
			}
		},
		validations: {
			title: [
				orm.enforce.ranges.length(1, undefined, "must be atleast 1 letter long"),
				orm.enforce.ranges.length(undefined, 96, "cannot be longer than 96 letters")
			],
			body: [
				orm.enforce.ranges.length(1, undefined, "must be atleast 1 letter long"),
				orm.enforce.ranges.length(undefined, 32768, "cannot be longer than 32768 letters")
			]
		},
		methods: {
			serialize: function() {
				var comments;

				if (this.comments) {
					comments = this.comments.map(function(c) {
						return c.serialize();
					});
				} else {
					comments = [];
				}

				return {
					id: this.id,
					title: this.title,
					body: this.body,
					createdAt: moment(this.createdAt).fromNow(),
					comments: comments
				};
			},
			getdatestring: function() {
				return new Intl.DateTimeFormat("zh-CN").format(this.createdAt)
			}
		}
	});
};