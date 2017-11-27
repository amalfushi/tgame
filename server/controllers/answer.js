const mongoose = require("mongoose"),
Answers = mongoose.model("Answer"),
Questions = mongoose.model("Question")


module.exports = {
    create: function(req, res){
        Answers.create(req.body, (err, answer)=>{
            if (err){
                return res.json(err);
            }
            Questions.findByIdAndUpdate(answer.question, {$push: {answers: answer}, $inc: {rating: 1}}, {new: true}, (err, question)=>{
                if(err){
                    return res.json(err);
                }
                console.log(question);
                return res.json(question);
            })
        });
    },

    // upVote: function(req, res){
    //     Answers.findByIdAndUpdate(req.params.id, {$inc: {rating: 1}}, (err, answer)=>{
    //         if(err){
    //             return res.json(err);
    //         }
    //         Questions.findByIdAndUpdate(answer.question, {$inc: {rating: 1}}, (err, question)=>{
    //             if (err){
    //                 return res.json(err)
    //             }
    //             console.log(question.rating)
    //         });
    //         return res.json(answer);
    //     });
    // },

    // downVote: function(req, res){
    //     Answers.findByIdAndUpdate(req.params.id, {$inc: {rating: -1}}, (err, answer)=>{
    //         if(err){
    //             return res.json(err);
    //         }
    //         Questions.findByIdAndUpdate(answer.question, {$inc: {rating: -1}}, (err, question)=>{
    //             if (err){
    //                 return res.json(err)
    //             }
    //         });
    //         return res.json(answer);
    //     });
    // }
}