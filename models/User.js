const { Schema, model } = require("mongoose");
const validator = require("validator");

// This will be the user model
const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      validate: {
        validator: validator.isEmail,
        message: "Please enter a valid email",
      },
    },
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: "thought",
      },
    ],
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: "user",
      },
    ],
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

// get the friend count as a virtual
userSchema.virtual("friendCount").get(function () {
  if (this.friends) {
    return this.friends.length;
  } else {
    return 0;
  }
});

// create the User model using the userSchema
const User = model("user", userSchema, "Users");

module.exports = User;
