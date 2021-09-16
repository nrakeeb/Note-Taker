const express = require('express');
const noteData = require('./db/db.json');
const uuid = require('./helpers/uuid');
const path = require('path');

const PORT = 3001;
const app = express();

// Sets up the Express app to handle data parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/notes.html'))
);

app.get('/api/notes', (req, res) => res.json(noteData));

app.post('/api/notes', (req, res) => console.log("success!"))

//app.delete('/api/notes/:id', (req, res) => )

app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});