const mongoose = require("mongoose");

const QuestionSchema = mongoose.Schema({
    question: {
        type: String,
        required: [true, "Questions are required"],
        minlength: [15, "Questions must be 15 or more characters"]
    },
    answers: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Answer"
    }],
}, { timestamps: true });

mongoose.model("Question", QuestionSchema);