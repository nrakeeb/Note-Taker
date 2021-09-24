const express = require('express');
const router = express.Router();
const readAndAppend = require('../helpers/readAndAppend')

const noteData = require('../db/db.json');
const uuid = require('../helpers/uuid');

router.get('/', (req, res) => res.json(noteData));

router.post('/', (req, res) => {

const {title, text} = req.body;

if (title && text) {
    const newNote = {
        title,
        text,
        id: uuid()
    };

    readAndAppend(newNote, './db/db.json')

    const response = {
        status: 'success',
        body: newNote
    };

    console.log(response);
    res.status(201).json(response);
} else {
    res.status(500).json('Error')
}
});

//router.delete('/api/notes/:id', (req, res) => )

module.exports = router;