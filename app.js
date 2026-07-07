const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use('/css', express.static('css'));

const myNotes = [
    'http is a protocol',
    'http requests have a url, method, header, and body',
    'remember your syntax'
];

app.get('/', (req, res) => {
    res.render('notes.ejs', { notes: myNotes });
});

app.post('/notes', (req, res) => {
    myNotes.push(req.body.notes);
    res.redirect('/');
});

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));

