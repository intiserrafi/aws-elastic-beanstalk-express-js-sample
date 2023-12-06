const express = require('express');
const app = express();
const port = 8080;

app.use('/index2',express.static("views"))
app.get('/', (req, res)=>{
    res.sendfile('public/index.html');
});
app.get('/index', (req, res) =>{
    res.sendfile('public/index.html');
});
app.listen(port);
console.log(`App running on http://localhost:${port}`);
