const { Schema, model } = require("mongoose");
const reactionSchema = require("./Reaction");

// This will be the thought model
const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 280,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: formatDate,
    },
    username: {
      type: String,
      required: true,
    },
    reactions: [reactionSchema],
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

// get the date
function formatDate(date) {
  return date.toLocaleDateString();
}

// get the reaction count as a virtual
thoughtSchema.virtual("reactionCount").get(function () {
  if (this.reactions) {
    return this.reactions.length;
  } else {
    return 0;
  }
});

// create the Thought model using the thoughtSchema
const Thought = model("thought", thoughtSchema, "Thoughts");

module.exports = Thought;
