const express = require('express');
const app = express();
const port = 8080;

app.use('/index2',express.static("views"))
app.get('/', (req, res) => res.send('Hello Wellcome WeThink Cloud by admin!!!'));
app.get('/index', (req, res) =>{
    res.render("index.ejs",{name:"Group 34"})
});
app.listen(port);
console.log(`App running on http://localhost:${port}`);
