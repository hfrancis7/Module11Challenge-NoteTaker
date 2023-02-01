const router = require("express").Router(); //router
const fs = require("fs"); //filereader
const util = require("util"); //util
const readFile = util.promisify(fs.readFile); //turns readFile into a promise, as recommended by tutor
const path = require('path');


//function getNotes
//reads db.json file in utf-8 format, then it turns the notes into rawNotes by parsing the json file
const getNotes = () => {
    return readFile("db/db.json", "utf-8").then(rawNotes => [].concat(JSON.parse(rawNotes)));
}
//getting the notes using getNotes reading the notes from json
router.get("/notes", (req, res) => {
    getNotes().then(notes => res.json(notes));
})

//post the new notes into the html list
router.post("/notes", (req, res) => {
    getNotes().then(notes => {
        let notesArr = notes; //notes array
        const { title, text } = req.body; //get the title and stuff from notes

        if(title && text){
            const newNote = { //create a new note (TODO: needs identifier...)
                title,
                text
            }
            notesArr.push(newNote); //pushes the new note onto the list
        }else{ //there already appears to be a safeguard in the html (or at least within the code already given), putting this here just in case.
            alert("Please make sure both the title field and the note field are filled out.");
        }

        let notesStr = JSON.stringify(notesArr); //turns the json notes array into a string

        //writes the notes information into the json file (Not formatted though... wonder if that matters?)
        fs.writeFile("db/db.json", notesStr, (err) =>
        err ? console.error(err) : console.log('\nSuccess.\n'));
        
        res.redirect('back'); //refreshes the page to display the new note created
    });
})
module.exports = router;