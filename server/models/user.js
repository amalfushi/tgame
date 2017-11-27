const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Names are required"],
        minlength: [2, "Names must be 2 or more characters"]
    },
    score: {
        type: Number,
        default: 0
    },
    possibleScore: {
        type: Number,
        default: 0
    },
    percentage: {
        type: Number,
        default: 0
    }

}, { timestamps: true });

mongoose.model("User", UserSchema);