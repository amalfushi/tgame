const mongoose = require("mongoose"),
    Users = mongoose.model("User");


module.exports = {
    create: function(req, res){
        Users.findOne({name: req.body.name}, (err, user)=>{
            if(err){
                return res.json(err)
            } else if (!user){
                Users.create(req.body, (err, newUser)=>{
                    if(err){
                        return res.json(err)
                    }
                    req.session.user_id = newUser._id;
                    return res.json(newUser);
                });
            } else {
                req.session.user_id = user._id;
                return res.json(user)
            }
        });
    },

    logout: function(req, res){
        delete req.session.user_id;
        return res.json({ status: true });
    },

    getAll: function(req, res){
        Users.find({}, (err, users)=>{
            if (err) {
                return res.json(err)
            }
            return res.json(users)
        });
    },

    grade: function(req, res){
        const grade = req.params.grade
        console.log(grade)
        Users.findByIdAndUpdate(req.session.user_id, { $inc:{possibleScore:3}}, {new: true}, (err, user)=>{
            if(err){
                return res.json(err);
            }
            Users.findByIdAndUpdate(req.session.user_id, { $inc:{score:grade}}, {new: true}, (err, user)=>{
                if(err){
                    return res.json(err);
                }
                return res.json(user);
            });
        });
    },

    session: function(req, res) {
        if(!req.session.user_id){
            return res.json({ status: false });
        }

        Users.findById(req.session.user_id, (err, user)=>{
            if (err) {
                return res.json(err);
            }
            return res.json(user);
        })
    }
}