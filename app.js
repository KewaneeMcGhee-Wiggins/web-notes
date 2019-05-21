const express =require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));


const myNotes = [
    'http is a protocol',
    'http requests have a url, method, header, and body',
    'remember your syntax',
];

app.post('/notes', (req, res) => { 
    notes.push(req.body.note);
    res.redirect('/');
  });
  
  
app.use('/css', express.static
('css'));
//app.get('/', (_req, res) => res.send('Web Notes'))
//app.use('/', express.static('views'));
app.get('/', (req, res) => {
    res.render('notes.ejs', { notes: myNotes });
});

app.listen(3000, (req,res) =>
    console.log(`Example app listening on port 3000 !`)
    )
    




