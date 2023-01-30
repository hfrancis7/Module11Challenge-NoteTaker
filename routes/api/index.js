const router = require("express").Router(); //router
const fs = require("fs"); //filereader
const util = require("util"); //util
const readFile = util.promisify(fs.readFile); //turns readFile into a promise, as recommended by tutor

//function getNotes
//reads db.json file in utf-8 format, then it turns the notes into rawNotes by parsing the json file
const getNotes = () => {
    return readFile("db/db.json", "utf-8").then(rawNotes => [].concat(JSON.parse(rawNotes)));
}
//getting the notes using getNotes reading the notes from json
router.get("/notes", (req, res) => {
    getNotes().then(notes => res.json(notes));
})

//post the notes
//getNotes console.log notes
//console.log notes
//console.log req body
router.post("/notes", (req, res) => {
    getNotes().then(notes => {
        console.log(notes);
        console.log(req.body);
    });
})
module.exports = router;