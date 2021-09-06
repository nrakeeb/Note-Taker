const express = require('express');
const noteData = require('./db/db.json');

const PORT = 3001;
const app = express();

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));

app.get('/notes', (req, res) => res.json(noteData));

//app.delete('/deleteNote', (req, res) => )

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});