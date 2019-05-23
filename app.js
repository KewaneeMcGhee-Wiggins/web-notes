const express =require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));


const myNotes = [
    'http is a protocol',
    'http requests have a url, method, header, and body',
    'remember your syntax'
];

app.post('/notes', (req, res) => { 
    myNotes.push(req.body.notes);
    console.log(myNotes);
    res.redirect('/');
  });
 
 
  
app.use('/css', express.static('css'));
//view w/css
// app.get('/', (_req, res) => res.send('Web-Notes'));
//app.use('/', express.static('views'));
//more dynamic view
app.get('/', (req, res) => {
    res.render('notes.ejs', { notes: myNotes });
})   


app.listen(3000, (req,res) =>{
    console.log(`Example app listening on port 3000 !`)
    
})


