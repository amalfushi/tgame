const mongoose = require("mongoose"),
    path = require("path"),
    Users = require("../controllers/user.js"),
    Questions = require("../controllers/question.js"),
    Answers = require("../controllers/answer.js")

module.exports = function(app){
    app.post("/users", Users.create);
    app.delete("/users", Users.logout);
    app.get("/users", Users.getAll)
    app.put("/users/:grade", Users.grade)


    app.get("/questions", Questions.getThree);
    app.post("/questions", Questions.create);
    // app.get("/questions/:id", Questions.getOne);

    // app.post("/answers", Answers.create)

    app.post("/session", Users.session);

    app.all("*", (req, res, next)=>{
        res.sendFile(path.resolve("./public/dist/index.html"));
    })
}