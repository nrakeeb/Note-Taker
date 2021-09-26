const express = require('express');
const router = express.Router();
const helpers = require('../helpers/readAndAppend');
const readFromFile = require('../helpers/readFromFile');

const uuid = require('../helpers/uuid');

router.get('/', (req, res) => {
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)))
});
    
router.post('/', (req, res) => {

const {title, text} = req.body;

if (title && text) {
    const newNote = {
        title,
        text,
        id: uuid()
    };

    helpers.readAndAppend(newNote, './db/db.json');

    const response = {
        status: 'Successfully added note',
        body: newNote
    };

    res.status(201).json(response);
} else {
    res.status(500).json('Error');
}
});

router.delete('/:id', (req, res) => {
    let noteId = req.params.id;
    readFromFile('./db/db.json').then((data) => {
    const parsedNotes = JSON.parse(data);
    parsedNotes.forEach(note => {
           if(note.id == noteId) {
               parsedNotes.splice(note, 1)
           }  
       });
       helpers.writeToFile('./db/db.json', parsedNotes);
    }
)
const response = {
    status: 'Successfully deleted note'
};

res.status(200).json(response);
})

module.exports = router;