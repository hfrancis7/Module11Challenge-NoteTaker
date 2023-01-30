const router = require("express").Router();
const fs = require("fs");
const util = require("util");
const readFile = util.promisify(fs.readFile);

const getNotes = () => {
    return readFile("db/db.json", "utf-8").then(rawNotes => [].concat(JSON.parse(rawNotes)));
}
router.get("/notes", (req, res) => {
    getNotes().then(notes => res.json(notes));
})
router.post("/notes", (req, res) => {
    getNotes().then(notes => {
        console.log(notes);
        console.log(req.body);
    });
})
module.exports = router;