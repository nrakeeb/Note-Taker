const express = require('express');
const router = express.Router();
const readAndAppend = require('../helpers/readAndAppend');
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

    readAndAppend(newNote, './db/db.json');

    const response = {
        status: 'success',
        body: newNote
    };

    console.log(response);
    res.status(201).json(response);
} else {
    res.status(500).json('Error');
}
});

router.delete('/:id', (req, res) => {
    console.log("success!");
})

module.exports = router;