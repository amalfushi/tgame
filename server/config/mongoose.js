const mongoose = require("mongoose"),
    fs = require("fs"),
    path = require("path");

mongoose.connect("mongodb://localhost/TriviaGame", { useMongoClient: true });

const mp = path.join(__dirname, "./../models");

fs.readdirSync(mp).forEach((file)=>{
    if(file.indexOf(".js") >=0) {
        console.log(`\n****Loading ${file}....`);
        require(mp + "/" + file);
    }
});