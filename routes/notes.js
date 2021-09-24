const express = require('express');
const router = express.Router();

const noteData = require('../db/db.json');
const uuid = require('../helpers/uuid');

router.get('/', (req, res) => res.json(noteData));

router.post('/', (req, res) => console.log("success!"))

//router.delete('/api/notes/:id', (req, res) => )

module.exports = router;