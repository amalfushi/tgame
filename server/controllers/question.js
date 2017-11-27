const mongoose = require("mongoose"),
    Questions = mongoose.model("Question"),
    Answers = mongoose.model("Answer");


module.exports = {
    create: function(req, res){
        Questions.create({question: req.body.question}, (err, question)=>{
            if (err){
                return res.json(err);
            }
            req.body.answers[0].question = question._id
            Answers.create(req.body.answers[0], (err, answer1)=>{
                if (err){
                    return res.json(err);
                } else {
                    req.body.answers[1].question = question._id
                    Answers.create(req.body.answers[1], (err, answer2)=>{
                        if (err){
                            return res.json(err);
                        } else {
                            req.body.answers[2].question = question._id
                            Answers.create(req.body.answers[2], (err, answer3)=>{
                                if (err){
                                    return res.json(err);
                                }
                                question.answers.push(answer1._id)
                                question.answers.push(answer2._id)
                                question.answers.push(answer3._id)
                                question.save((err, question)=>{
                                    if(err) {
                                        return res.json(err)
                                    }
                                    console.log(question)
                                    return res.json(question)
                                })
                            });
                        }
                    });
                }
            })
        });
    },

    // getAll: function(req, res){
    //     Questions.find({}).sort("-createdAt").populate({path: "user", model:"User"}).sort("-createdAt").exec((err, questions)=>{
    //         if(err){
    //             console.log(err)
    //             return res.json(err);
    //         }
    //         return res.json(questions);
    //     });
    // },

    getThree: function(req, res){
        Questions.find({}).populate({path: "answers", model: "Answer"}).exec( (err, questions)=>{
            if(err){
                return res.json(err);
            }
            return res.json(questions);
        });
    },

    // delete: function(req, res){
    //     Questions.findById(req.params.id, (err, question)=>{
    //         if(err){
    //             return res.json(err);
    //         }
    //         if(!question){
    //             return res.json({ status: false, message: "User not authorized"})
    //         }
    //         if(question.user == req.session.user_id){
    //             question.remove({_id: question._id})
    //             return res.json({ status: true})
    //         }
    //         return res.json({ status: false })
    //     });
    // },
}