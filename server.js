const express = require("express"); //require express
const routes = require("./routes"); //require everything in routes directory
const path = require("path"); //require path
const app = express(); //ap is express
const PORT = 5000; //port num

app.use(express.json()); //use express.json middleware
app.use(express.urlencoded({extended: false})); //use urlecoded middleware
app.use(express.static("public")); //use express static public
app.use(routes); //use all routes

//open the server
app.listen(PORT, () => {
    console.log("Listening on http://localhost:" + PORT);
})