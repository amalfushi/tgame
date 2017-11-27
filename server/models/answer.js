const mongoose = require("mongoose");

const AnswerSchema = mongoose.Schema({
    answer: {
        type: String,
        required: [true, "Answers cannot be blank"],
    },
    question:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Question"
    },
    isCorrect:{
        type: Boolean,
        default: false
    }
}, { timestamps: true });

mongoose.model("Answer", AnswerSchema);