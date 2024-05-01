const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');

const thoughtSchema = new Schema({
	thoughtText: {
		type: String,
		required: true,
		minlength: 1,
		maxlength: 280,
	},
	createdAt: {
		type: Date,
		default: Date.now,
		get: formatDate
	},
	username: {
		type: String,
		required: true,
	},
	reactions: [reactionSchema]
}, {
	toJSON: { virtuals: true },
	toObject: { virtuals: true },
});

function formatDate(date) {
	return date.toLocaleDateString();
}

thoughtSchema.virtual('reactionCount').get(function () {
	if (this.reactions) {
		return this.reactions.length;
	} else {
		return 0;
	}
  });

const Thought = model('thought', thoughtSchema, 'Thoughts');

module.exports = Thought;
