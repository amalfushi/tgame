const express = require("express"),
    app = express(),
    bp = require("body-parser"),
    path = require("path"),
    port = 8000,
    session = require("express-session");

app.use(express.static(path.join(__dirname, "./public/dist")));
app.use(bp.json());
app.use(session({
    secret: "superSecretkey,guys",
    resave: "false",
    saveUninitialized: true
}));

require("./server/config/mongoose");
require("./server/config/routes")(app);

app.listen(port, ()=> console.log(`\nListening on port ${port}....`))